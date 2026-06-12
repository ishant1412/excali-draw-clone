import { db } from "@repo/database";
export  async function authenticateUser(data:{email:string,RoomKey:string}){
 const room = await db.room.findFirst({
    
 })
}