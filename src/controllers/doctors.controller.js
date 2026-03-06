import bcrypt from 'bcrypt';
import { updateDoctor } from '../services/auth.service.js';

export function getMeDoctorCtrl(req,res) {
    const { id, username, specialization } = req.result
    
    res.status(200).json({id, username, specialization})
}

export async function editDoctorCtrl(req,res,next) {
    const { id } = req.result
    const { username,password,specialization } = req.body
    try {
        const hashPW = await bcrypt.hash(password, 5)
        await updateDoctor(id, username, hashPW, specialization)
        res.status(200).json({
            user: {
                id: id,
                username: username,
                specialization: specialization
            }
})

    } catch (error) {
        next(error)
    }

}