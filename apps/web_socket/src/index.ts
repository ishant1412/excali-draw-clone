import { WebSocketServer } from "ws";

const wss = new WebSocketServer({
    port:7080
})

wss.on("connection",(socket)=>{
       socket.on("message",(data)=>{
        for (let client of wss.clients){
            if(client.readyState==client.OPEN){
                client.send("kya baat hai ")
            }
        }
       })
})