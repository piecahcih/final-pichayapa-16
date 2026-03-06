import { prisma } from "../config/prisma.js";
import { signToken } from "../utils/jwt.js";


export const addDoctor = async (username, hashPW, specialization) => {
    const doctors = await prisma.doctor.create({
        data: {
            username, password: hashPW, specialization
        }
    })
    return doctors
}
export const addUser = async (username, hashPW) => {
    const users = await prisma.user.create({
        data: {
            username, password: hashPW
        }
    })
    return users
}


export const findDoctor = async ( username ) => {
    const doctorUser = await prisma.doctor.findFirst({
        where:{ username: username}
    })
    return doctorUser
}

export const findUser = async ( username ) => {
    const userUser = await prisma.user.findFirst({
        where:{ username: username}
    })
    return userUser
}
export const findDoctorbyId = async ( id ) => {
    const doctorUser = await prisma.doctor.findFirst({
        where:{ id:id }
    })
    return doctorUser
}

export const findUserbyId = async ( id ) => {
    const userUser = await prisma.user.findFirst({
        where:{ id:id }
    })
    return userUser
}


export const createToken = async ( user ) => {
    const payload = {
        id: user.id,
        username: user.username
    }
    const token = signToken(payload)
    return token
}


export const updateUser = async ( id, username, hashPW ) => {
    const result = await prisma.user.update({
        where: { id },
        data: {
            username,
            password: hashPW
        }
    })
    return result
}
export const updateDoctor = async ( id, username, hashPW ,specialization) => {
    const result = await prisma.doctor.update({
        where: { id },
        data: {
            username,
            password: hashPW,
            specialization
        }
    })
    return result
}
