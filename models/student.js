import mongoose from "mongoose";

const studentShema = new mongoose.Schema({
    fname : String,
    age : Number
})


const Student = mongoose.model("student",studentShema)

export default Student;