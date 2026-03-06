import { prisma } from "../config/prisma.js";

export const addHealthRec = async (id,type,value) => {
    const healthRec = await prisma.healthRecord.create({
        data: {
            type, value, userId : id
        }
    })
    return healthRec
}

export const getHealthRec = async () => {
    const healthRec = await prisma.healthRecord.findMany({
        select: {
            id: true,
            type: true,
            value: true,
            userId: true,
            date: true
        }
    })
    return healthRec
}