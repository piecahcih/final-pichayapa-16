import express from 'express'
import { authCheckDoctor } from '../middlewares/authCheck.mdw.js'
import { editDoctorCtrl, getMeDoctorCtrl } from '../controllers/doctors.controller.js'

const doctorsRoute = express.Router()

doctorsRoute.get("/me",authCheckDoctor, getMeDoctorCtrl)
doctorsRoute.put("/me",authCheckDoctor, editDoctorCtrl)


export default doctorsRoute