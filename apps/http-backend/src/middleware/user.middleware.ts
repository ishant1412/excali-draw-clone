import jwt from "jsonwebtoken"
import { NextFunction, Request,Response } from "express"

export const UserMiddleware =async(req:Request,res:Response,next:NextFunction)=>{
    const authHeader =req.headers.authorization
    if(!authHeader?.startsWith("Bearer ")){
        return res.status(400).json({
            mestsage:"not a bearer token"
        })
    }
    const token = JSON.stringify(authHeader.split(" ")[1]);
    const jwtPayload=jwt.verify(token,process.env.JWT_SECRET!)
    
    //@ts-ignore
    req.email= jwtPayload.email
    next()

}
