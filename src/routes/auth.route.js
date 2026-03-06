import express from 'express'
import { loginDoctorCtrl, loginUserCtrl, registerDoctorCtrl, registerUserCtrl } from '../controllers/auth.controller.js'

const authRoute = express.Router()

authRoute.post("/register/doctor",registerDoctorCtrl)
authRoute.post("/register/user",registerUserCtrl)
authRoute.post("/login/doctor",loginDoctorCtrl)
authRoute.post("/login/user",loginUserCtrl)


export default authRoute