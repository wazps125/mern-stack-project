import User from "../models/user.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


export async function createUser(req,res) {
    try{
        const user = await User.findOne({email:req.body.email})

    //if(user){
    //   res.json({msg:'alredy email used'})
    //     return
    //}

    const hashpassword = bcrypt.hashSync(req.body.password,10)

    if(req.user.isAdmin == 0){
        res.json({msg:"you are not an admin!!"})
    }

    const newUser = User({
        email:req.body.email,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        password:hashpassword
    })

    await newUser.save()
    res.json({msg:'user created successfully!'})

    }catch(err){
      res.json({msg:err.message})
    }
    
}


export async function loginuser(req,res) {
    try{
        const email = req.body.email
        const password = req.body.password

    if(email == null || password==null){
        res.status(400).json({msg:"Email & password are required!"})
        return
    }
    const user = await User.findOne({email:req.body.email})
    

    if(user == null){
        res.status(400).json({msg:"User not found!"})
        return
    }

    const isPasswordvalid = bcrypt.compareSync(password,user.password)

    if(isPasswordvalid){
        const token = jwt.sign({
                    email : user.email,
                    firstName : user.firstName,
                    lastName : user.lastName,
                    isAdmin : user.isAdmin,
                    isBlocked : user.isBlocked,
                    isEmailVerified : user.isEmailVerified,
                    image : user.image
                },
                "secretkey99!!!!!")
                res.status(200).json({message : "Login successful", token : token})
    }else{
         res.status(401).json({message : "Invalid password"})
    }
    }catch(err){
         res.json({message : err.message})

    }
}