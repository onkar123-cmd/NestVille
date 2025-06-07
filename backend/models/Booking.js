import mongoose from "mongoose";

const bookingSchema=new mongoose.Schema({
    user: {type: String, ref: "User", required: true},
    room: {type: String, ref: "Room", required: true},
    property: {type: String, ref: "Property", required: true},
    bookingDate: {type: Date, required: true},
    totalPrice: {type: Number, required: true},
    persons: {type: Number, required: true},
    status: {
        type: String,
        enum: ["pending", "confirm", "cancelled"],
        default: "pending",
    },
    paymentMethod: {
        type: String, 
        required: true,
        default: "Not Paid",
    },
    isPaid: {type: Boolean, default: false}
},{timestamps: true})

const Booking=mongoose.model("Booking", bookingSchema)

export default Booking;