import transporter from "../configs/nodemailer.js"
import Booking from "../models/Booking.js"
import Property from "../models/Property.js"
import Room from "../models/Room.js"
import stripe from "stripe"

// Function to check availability of room
const checkAvailability = async ({ bookingDate, room }) => {
    try {
        const bookings = await Booking.find({
            room,
            bookingDate,
        })
        const isAvailable = bookings.length === 0
        return isAvailable
    } catch (error) {
        console.log(error.message);
    }
}

// API to check to availlability of room
export const checkAvailabilityAPI = async (req, res) => {
    try {
        const { room, bookingDate } = req.body
        const isAvailable = await checkAvailability({ bookingDate, room })
        res.json({ success: true, isAvailable })
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

// API to create a new booking
export const createBooking = async (req, res) => {
    try {
        const { room, bookingDate, persons } = req.body
        const user = req.user._id
        // Before booking check availability
        const isAvailable = await checkAvailability({ bookingDate, room })
        if (!isAvailable) {
            return res.json({ success: false, message: "Room is not available" })
        }
        // Get total price for the room
        const roomData = await Room.findById(room).populate("property")
        let totalPrice = roomData.pricePerMonth

        // Calculate price based on month
        const book = new Date(bookingDate)
        const today=new Date()

        const booking = await Booking.create({
            user,
            room,
            property: roomData.property._id,
            persons: +persons,
            bookingDate,
            totalPrice,
        })

        const mailOptions={
            from: process.env.SENDER_EMAIL,
            to: req.user.email,
            subject: "Room Booking Details",
            text: "Hello world?", // plain‑text body
            html: `
                <h2>Your Booking Details</h2>
                <p>Dear ${req.user.username},</p>
                <p>Thank you for your booking! Here are your details:</p>
                <ul>
                    <li><strong>Booking ID:</strong> ${booking._id}</li>
                    <li><strong>Property Name:</strong> ${roomData.property.name}</li>
                    <li><strong>Location:</strong> ${roomData.property.address}</li>
                    <li><strong>Date:</strong> ${booking.bookingDate.toDateString()}</li>
                    <li><strong>Booking Amount:</strong>${process.env.CURRENCY || 'Rs.'}${booking.totalPrice}/month</li>
                </ul>
                <p>Welcoming you in the new property!</p>
                <p>If you need to make any changes, feel free to contact us.</p>
            `
        }

        await transporter.sendMail(mailOptions)

        res.json({ success: true, message: "Booking created successfully" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Failed to create bookings" })
    }
}

// API to get all bookings for a user
export const getUserBookings = async (req, res) => {
    try {
        const user = req.user._id
        const bookings = await Booking.find({ user }).populate("room property").sort({ createdAt: -1 })
        res.json({ success: true, bookings })
    } catch (error) {
        res.json({ success: false, message: "Failed to fetch bookings" })
    }
}

export const getPropertyBookings = async (req, res) => {
    try {
        const property = await Property.findOne({ owner: req.auth.userId })
        if (!property) {
            return res.json({ success: false, message: "No property found" })
        }
        const bookings = await Booking.find({ property: property._id }).populate("room property user").sort({ createdAt: -1 })

        // Total bookings
        const totalBookings = bookings.length
        // Total revenue
        const totalRevenue = bookings.reduce((acc, booking) => acc + booking.totalPrice, 0)
        res.json({ success: true, dashboardData: { totalBookings, totalRevenue, bookings } })
    } catch (error) {
        res.json({ success: false, message: "Failed to fetch bookings" })
    }
}

// Stripe Payment
export const stripePayment=async(req,res)=>{
    try {
        const {bookingId}=req.body
        const booking=await Booking.findById(bookingId)
        const roomData=await Room.findById(booking.room).populate('property')
        const totalPrice=booking.totalPrice
        const {origin}=req.headers

        const stripeInstance=new stripe(process.env.STRIPE_SECRET_KEY)

        const line_items=[
            {
                price_data:{
                    currency: "inr",
                    product_data:{
                        name: roomData.property.name,
                    },
                    unit_amount: totalPrice*100
                },
                quantity: 1,
            }
        ]
        // Create checkout session
        const session=await stripeInstance.checkout.sessions.create({
            line_items,
            mode: "payment",
            success_url: `${origin}/loader/my-bookings`,
            cancel_url: `${origin}/my-bookings`,
            metadata:{
                bookingId,
            }
        })
        res.json({success: true, url: session.url})
    } catch (error) {
        res.json({success: false, message: "Payment Failed"})
    }
}