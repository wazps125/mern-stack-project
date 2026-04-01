import express from 'express'
import { createUser ,loginuser} from '../controllers/userController.js'

const userRouters = express.Router()


userRouters.post('/',createUser)
userRouters.post('/login',loginuser)


export default userRouters