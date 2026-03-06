import jwt from "jsonwebtoken";

export function signToken(payload) {
    const token = jwt.sign(payload, process.env.JWT_SECRET,{
        algorithm: "HS256",
        expiresIn: "30d"
    })

    return token
}

export function verifyToken(token) {
    const payload = jwt.verify(token, process.env.JWT_SECRET,{
        algorithms:["HS256"]
    })
    
    return payload
}