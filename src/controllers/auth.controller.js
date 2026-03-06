import { addDoctor, addUser, createToken, findDoctor, findUser } from "../services/auth.service.js"
import bcrypt from 'bcrypt';
import createError from 'http-errors';


export async function registerDoctorCtrl (req,res,next){
    const { username, password, specialization } = req.body
    try {
        const doctor = await findDoctor(username)
        if(doctor){
            throw createError(400, "Username already exist")
        }
        const hashPW = await bcrypt.hash(password, 5)
        const newDoctor = await addDoctor(username, hashPW, specialization)
        res.status(201).json({
            success: true,
            message: "Doctor registered successfully",
            data: {
                id: newDoctor.id,
                username: newDoctor.username,
                specialization: newDoctor.specialization
            }
        })
    } catch (error) {
        next(error)
    }
}

export async function registerUserCtrl (req,res,next){
    const { username, password } = req.body
    try {
        const user = await findUser(username)
        if(user){
            throw createError(400, "Username already exist")
        }
        const hashPW = await bcrypt.hash(password, 5)
        const newUser = await addUser(username, hashPW)
        res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: {
                id: newUser.id,
                username: newUser.username
            }
        })
    } catch (error) {
        next(error)
    }
}


export async function loginDoctorCtrl (req,res,next){
    const { username, password } = req.body
    try {
        const user = await findDoctor(username)
        const isMatch = await bcrypt.compare(password, user.password)
        if(!user || !isMatch){
            throw createError(401, "Invalid credentials")
        }
        const token = await createToken(user)
        res.status(201).json({
            success: true,
            token: token,
            data: {
                id: user.id,
                username: user.username,
                specialization: user.specialization
            }
        })
    } catch (error) {
        next(error)
    }
}

export async function loginUserCtrl (req,res,next){
    const { username, password } = req.body
    try {
        const user = await findUser(username)
        const isMatch = await bcrypt.compare(password, user.password)
        if(!user || !isMatch){
            throw createError(401, "Invalid credentials")
        }
        const token = await createToken(user)
        res.status(201).json({
            success: true,
            token: token,
            data: {
                id: user.id,
                username: user.username
            }
        })
    } catch (error) {
        next(error)
    }
}

