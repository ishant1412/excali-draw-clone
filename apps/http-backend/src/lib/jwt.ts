import {userSchema, User ,UserSignIn,UserSigninSchema} from "@repo/utils";
import { error } from "console";
import jwt from "jsonwebtoken"

export function ValidateUser(data:User){
    const is_valid= userSchema.safeParse(data)
    if(!is_valid.success){
        throw Error(JSON.stringify(is_valid.error))
    }

}
export function ValidateUserSignin(data:UserSignIn){
    const is_valid= UserSigninSchema.safeParse(data)
    if(!is_valid.success){
        throw Error(JSON.stringify(is_valid.error))
    }

}

export function createToken(email:string){
    const token = jwt.sign(
        {
          email: email,
        },
        process.env.JWT_SECRET!,
      );
      return token
}

