import express from 'express'
import { authCheckUser } from '../middlewares/authCheck.mdw.js'
import { editUserCtrl, getMeUserCtrl } from '../controllers/users.controller.js'

const usersRoute = express.Router()

usersRoute.get("/me",authCheckUser, getMeUserCtrl )
usersRoute.put("/me",authCheckUser, editUserCtrl )


export default usersRoute