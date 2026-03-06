import express from 'express'
import { registerDoctor } from '../controllers/auth.controller.js'

const authRoute = express.Router()

authRoute.post("/register/doctor",registerDoctor)

export default authRoute