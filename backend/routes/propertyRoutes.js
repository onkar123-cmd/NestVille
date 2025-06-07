import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { registerProperty } from "../controllers/propertyController.js";

const propertyRouter=express.Router()

propertyRouter.post('/', protect, registerProperty)

export default propertyRouter;