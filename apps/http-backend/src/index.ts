import express from "express"
import cors from "cors"
import { singInUser,singUpUser } from "./http.controllers/user.controller"
import { UserMiddleware } from "./middleware/user.middleware"
import authrouter from "./router/auth.route"
import roomrouter from "./router/room.route"
import userrouter from "./router/user.route"
const app= express()
app.use(cors())
app.use(express.json())


app.use("/auth",authrouter)

app.use(UserMiddleware)
app.use('/rooms',roomrouter)
app.use('/users',userrouter)
app.listen(8080,()=>{
    console.log("server runnig at http://localhost:8080")
})
