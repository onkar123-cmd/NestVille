import Property from "../models/Property.js";
import User from "../models/User.js";

export const registerProperty=async(req,res)=>{
    try {
        const {name,address,contact,city}=req.body
        const owner=req.user._id
        const property=await Property.findOne({owner})
        if(property){
            return res.json({success:false, message: "Property Already Registered"})
        }
        await Property.create({name, address, contact, city, owner})
        await User.findByIdAndUpdate(owner, {role: "propertyOwner"})
        res.json({success:true, message: "Property Registered Successfully"})
    } catch (error) {
        res.json({success:false, message: error.message})
    }
}