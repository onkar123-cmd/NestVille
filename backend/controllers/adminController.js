import jwt from "jsonwebtoken"
import User from "../models/User.js"

// Login admin
const adminLogin=async(req,res)=>{
    try {
        const {email,password}=req.body
        if(password===process.env.ADMIN_PASSWORD && email===process.env.ADMIN_EMAIL){
            const token=jwt.sign({email}, process.env.JWT_SECRET) // , {expiresIn: '7d'}
            return res.json({success:true, token})
        }else{
            return res.json({success:false, message: "Invalid Credential"})
        }
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

// all user list
const listUser=async(req,res)=>{
    try {
        const users=await User.find({role: "user"})
        res.json({success:true,data:users})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

// all owner list
const listOwner=async(req,res)=>{
    try {
        const users=await User.find({role: "roomOwner"})
        res.json({success:true,data:users})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

export {adminLogin, listUser, listOwner}