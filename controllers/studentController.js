import Student from "../models/student.js";

export function getStudents(req,res){
Student.find().then(
    (result)=>{
        res.json({
            result
        })

    }
)
}


export function postStudent(req,res){
       const newStudent = new Student(req.body);
       newStudent.save().then(
        
           () => {
            res.json({
                msg:"successfull!",
            })
           }
        )}