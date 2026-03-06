import express from 'express';
import { getHealthRecCtrl, recordHealthRecCtrl } from '../controllers/healthrec.controller.js';
import { authCheckUser } from '../middlewares/authCheck.mdw.js';

const healthrecRoutes = express.Router()

healthrecRoutes.post("/",authCheckUser,recordHealthRecCtrl)
healthrecRoutes.get("/",authCheckUser,getHealthRecCtrl)


export default healthrecRoutes;