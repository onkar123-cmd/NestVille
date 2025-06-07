import express from "express";
import { adminLogin, listOwner, listUser } from "../controllers/adminController.js";

const adminRouter=express.Router()

adminRouter.post('/login', adminLogin)
adminRouter.get('/ulist', listUser)
adminRouter.get('/olist', listOwner)

export default adminRouter