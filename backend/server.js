import express from "express"
import "dotenv/config"
import cors from "cors"
import connectDB from "./configs/db.js"
import { clerkMiddleware } from '@clerk/express'
import clerkWebhooks from "./controllers/clerkWebhooks.js"
import userRouter from "./routes/userRoutes.js"
import propertyRouter from "./routes/propertyRoutes.js"
import connectCloudinary from "./configs/cloudinary.js"
import roomRouter from "./routes/roomRoutes.js"
import bookingRouter from "./routes/bookingRoutes.js"
import { stripeWebhooks } from "./controllers/stripeWebhooks.js"
import adminRouter from "./routes/adminRoutes.js"


connectDB()
connectCloudinary()

const app=express()
app.use(cors()) //Enable Cross-origin resource sharing

// API ot listen to Stripe webhooks
app.post('/api/stripe', express.raw({type: "application/json"}), stripeWebhooks)

// Middleware
app.use(express.json())
app.use(clerkMiddleware())

// API to listen to clerk webhook
app.use("/api/clerk", clerkWebhooks)

app.get('/', (req,res)=>res.send("API is working"))
app.use('/api/user',userRouter)
app.use('/api/admin', adminRouter)
app.use('/api/propertys',propertyRouter)
app.use('/api/rooms', roomRouter)
app.use('/api/bookings', bookingRouter)

const PORT=process.env.PORT || 4000

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))