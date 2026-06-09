import express from "express"
import cors from "cors"
const app= express()
app.use(cors())
app.use(express.json())

app.post('/signup',async(req,res)=>{

})
app.post('/signin',(req,res)=>{

})

app.listen(8080,()=>{
    console.log("server runnig at http://localhost:8080")
})
