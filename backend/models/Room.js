import mongoose from "mongoose";

const roomSchema=new mongoose.Schema({
    property: {type: String, ref: "Property", required: true},
    roomType: {type: String, required: true},
    pricePerMonth: {type: Number, required: true},
    amenities: {type: Array, required: true},
    images: [{type: String}],
    isAvailable: {type: Boolean, default: true},
},{timestamps: true})

const Room=mongoose.model("Room", roomSchema)

export default Room;