import Property from "../models/Property.js"
import {v2 as cloudinary} from "cloudinary"
import Room from "../models/Room.js"

// API to create a new room for a property
export const createRoom=async(req,res)=>{
    try {
        const {roomType, pricePerMonth, amenities}=req.body
        const property=await Property.findOne({owner: req.auth.userId})
        if(!property) return res.json({success: false, message: "No property found"});
        
        // upload images to cludinary
        const uploadImages=req.files.map(async(file)=>{
            const response=await cloudinary.uploader.upload(file.path)
            return response.secure_url
        })

        // wait for all uploads to complete
        const images=await Promise.all(uploadImages)
        await Room.create({
            property: property._id,
            roomType,
            pricePerMonth: +pricePerMonth,
            amenities: JSON.parse(amenities),
            images,
        })
        res.json({success:true, message: "Room created successfully"})
    } catch (error) {
        res.json({success:false, message: error.message})
    }
}

// API to get all rooms
export const getRooms=async(req,res)=>{
    try {
        const rooms=await Room.find({isAvailable: true}).populate({
            path: 'property',
            populate: {
                path: 'owner',
                select: 'image'
            }
        }).sort({createdAt: -1})
        res.json({success:true, rooms})
    } catch (error) {
        res.json({success:false, message: error.message})
    }
}

// API to get all rooms for a specific property
export const getOwnerRooms=async(req,res)=>{
    try {
        const propertyData=await Property.findOne({owner: req.auth.userId})
        const rooms=await Room.find({property: propertyData._id.toString()}).populate("property")
        res.json({success:true, rooms})
    } catch (error) {
        res.json({success:false, message: error.message})
    }
}

// API to toggle availability of a room
export const toggleRoomAvailability=async(req,res)=>{
    try {
        const {roomId}=req.body
        const roomData=await Room.findById(roomId)
        roomData.isAvailable=!roomData.isAvailable
        await roomData.save()
        res.json({success:true, message: "Room availability Updated"})
    } catch (error) {
        res.json({success:false, message: error.message})
    }
}