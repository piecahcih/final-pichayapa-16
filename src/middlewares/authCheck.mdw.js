import createError from 'http-errors';
import { verifyToken } from '../utils/jwt.js';
import { findDoctorbyId, findUserbyId } from '../services/auth.service.js';

export async function authCheckDoctor(req,res,next) {
    try {
        const authorization = req.headers.authorization
        if(!authorization){
            throw createError(401, "Unauthorization")
        }
        const token = authorization.split(" ")[1]
        const payload = verifyToken(token);
        const user = await findDoctorbyId(payload.id)
        if(!user) {
            throw createError(401, "error")    
        }
        req.result = user
        next()
    } catch (error) {
        next(error)
    }
}

export async function authCheckUser(req,res,next) {
    try {
        const authorization = req.headers.authorization
        if(!authorization){
            throw createError(401, "Unauthorization")
        }
        const token = authorization.split(" ")[1]
        const payload = verifyToken(token);
        console.log(payload)
        const user = await findUserbyId(payload.id)
        console.log(user)
        if(!user) {
            throw createError(401, "error")    
        }
        req.result = user
        next()
    } catch (error) {
        next(error)
    }
}