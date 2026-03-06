import bcrypt from 'bcrypt';
import { updateUser } from '../services/auth.service.js';

export function getMeUserCtrl(req,res) {
    const { id, username } = req.result
    
    res.status(200).json({id, username})
}

export async function editUserCtrl(req,res,next) {
    const { id } = req.result
    const { username,password } = req.body
    try {
        const hashPW = await bcrypt.hash(password, 5)
        await updateUser(id, username, hashPW)
        res.status(200).json({
            success: true,
            message: "Profile updated successfully",
            user: {
                id: id,
                username: username
            }
})

    } catch (error) {
        next(error)
    }

}