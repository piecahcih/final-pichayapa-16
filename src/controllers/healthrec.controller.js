import { addHealthRec, getHealthRec, getHealthRecById } from "../services/healt.service.js"

export async function recordHealthRecCtrl (req,res,next) {
    try {
        const { id } = req.result
        console.log(req.result)
        const { type, value } = req.body
        const newHealtrec = await addHealthRec(id, type,value)
        console.log(newHealtrec)
        res.status(201).json({
            success: true,
            data: {
                id: newHealtrec.id,
                userId: id,
                type: newHealtrec.type,
                value: newHealtrec.value,
                recordedAt: newHealtrec.date
            }
})
    } catch (error) {
        next(error)
    }
}

export async function getHealthRecCtrl (req,res,next) {
    try {
        const healthRecs = await getHealthRec()
        res.status(200).json({healthRecs})
    } catch (error) {
        next(error)
    }
}

export async function getHealthRecByIdCtrl (req,res,next) {
    try {
        const { id } = req.params
        const numId = Number(id)
        // console.log("idja",id)

        const healthRecs = await getHealthRecById(numId)
        res.status(200).json({healthRecs})
    } catch (error) {
        next(error)
    }
}