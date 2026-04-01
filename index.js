import express from "express";
import mongoose from "mongoose";
import Student from "./models/student.js";
import studentRout from "./routers/studentRouters.js";
import userRouters from "./routers/userRouters.js";
import authenticate from "./middlewares/authenticate.js"


const app = express();

app.use(express.json());

app.use(authenticate)

// MongoDB Atlas URI
const mongoURI =
"mongodb://wazmh97_db_user:Cy6e3TxinHEPFZJX@ac-98t74kg-shard-00-00.8iyjxbq.mongodb.net:27017,ac-98t74kg-shard-00-01.8iyjxbq.mongodb.net:27017,ac-98t74kg-shard-00-02.8iyjxbq.mongodb.net:27017/?ssl=true&replicaSet=atlas-r7cduh-shard-0&authSource=admin&appName=Cluster0";

// Connect to MongoDB
mongoose.connect(mongoURI)
.then(() => {
    console.log("✅ MongoDB connected successfully");
})


// Test GET route
app.use("/students",studentRout)
app.use("/users",userRouters)



// Start server
app.listen(3000, () => {
    console.log("🚀 Server running on port 3000!");
});