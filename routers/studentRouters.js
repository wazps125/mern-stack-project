import express from 'express'
import { getStudents,postStudent } from '../controllers/studentController.js                  '


const studentRout = express.Router()


studentRout.get("/",getStudents)
studentRout.post("/",postStudent)


export default studentRout