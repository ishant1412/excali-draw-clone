import { Router } from "express";
import { singInUser, singUpUser } from "../http.controllers/user.controller";
export const router :Router=Router()
router.post("/signup",singUpUser)
router.post("/signin",singInUser)
export default router


