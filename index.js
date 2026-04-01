import express from "express";
import mongoose from "mongoose";
import Student from "./models/student.js";
import studentRout from "./routers/studentRouters.js";
import userRouters from "./routers/userRouters.js";
import authenticate from "./middlewares/authenticate.js"
import dotenv from "dotenv"
dotenv.config()


const app = express();

app.use(express.json());

app.use(authenticate)

// MongoDB Atlas URI
const mongoURI = process.env.mongoURI_doc

// Connect to MongoDB
mongoose.connect(mongoURI)
.then(() => {
    console.log("✅ MongoDB connected successfully");
})



app.use("/users",userRouters)



// Start server
app.listen(3000, () => {
    console.log("🚀 Server running on port 3000!");
});