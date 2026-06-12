import { WebSocketServer } from "ws";
import {db} from "@repo/database"
import tr from "zod/v4/locales/tr.js";
import { json } from "zod";

const wss = new WebSocketServer({
    port:7080
})
type datatype={
    email:string,
    RoomKey :string
}
type payloadType={
    type:"join-room",
    data:datatype
}
const UsersMap:datatype[]=[]

wss.on("connection",(socket)=>{
   
    socket.on("open",()=>{
        socket.send("succesfully connected to the websocket server")
        
    })
       socket.on("message",async (data)=>{
           const payload:payloadType= JSON.parse(data.toString())
           if(payload.type=="join-room"){
             const data = payload.data
               const room = await db.room.findFirst({
                where:{
                      RoomKey:data.RoomKey
                },
                include:{
                    users:true
                }
               })
               //@ts-ignore
            const exists = room.users.some(user=>user.email===data.email)
            if(!exists){
               
               socket.close(1008,"you are not listed as the member of this group" )

            }
            const ResponsePayload= {
                status:200,
                message:"succesfully authenticated"
            }
            socket.send(JSON.stringify(ResponsePayload))
          }      
                                                                           

        for (let client of wss.clients){
            if(client.readyState==client.OPEN){
                client.send("kya baat hai ")
            }
        }
       })
})
