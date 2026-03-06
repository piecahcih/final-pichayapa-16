import express from 'express';
import { getHealthRecByIdCtrl, getHealthRecCtrl, recordHealthRecCtrl } from '../controllers/healthrec.controller.js';
import { authCheckUser } from '../middlewares/authCheck.mdw.js';

const healthrecRoutes = express.Router()

healthrecRoutes.post("/",authCheckUser,recordHealthRecCtrl)
healthrecRoutes.get("/",authCheckUser,getHealthRecCtrl)
healthrecRoutes.get("/:id",authCheckUser,getHealthRecByIdCtrl)


export default healthrecRoutes;