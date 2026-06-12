import { Request, Response } from "express";
import { db } from "@repo/database";
import generateRandomString from "../lib/random";


export async function CreateRoom(req:Request,res:Response){
      const RoomName = req.body.RoomName
      //@ts-ignore
      const email = req.email
       try { 
     const room_exist = await db.room.findFirst({
      where:{
        RoomName:RoomName
      }
     })
       
     if(room_exist){
      return res.status(400).json({
        message:"the room exists with this name"
      })
     }
    const RoomKey = generateRandomString()
     
      const room =await db.room.create({
         data:{
           RoomName:RoomName,
           users:{
            create:[email]
           },
           RoomKey

        }
      })
      res.status(200).json({
        message:"succesfull created the room",
        roomid:room.id,
        RoomName:room.RoomName,
        

      })
    }catch(e){
      res.status(500).json({
        message:"unexpected error while creating room",
        e
      })
    }
      
     

}

export async function getRoom(req:Request,res:Response){
 const    RoomKey= JSON.stringify(req.params.RoomKey)
 try{ 

   const Room = await db.room.findFirst({
     where:{
       RoomKey:RoomKey
      },
      include:{
        users:true
        
      }
    })
    res.status(200).json({
      Room
    })
  }catch(e){
    res.status(500).json({
      message:"couldnt get the room ",
      error:e
    })
  }  

}

export async function deleteRoom(req:Request,res:Response){
    const RoomKey = req.body.RoomKey
    try{

      const room = await db.room.delete({
        where:{
          RoomKey
        }
      })
      res.status(200).json({
        message:"deleted room",
        room
      })
      
    }
    catch(e){
      res.status(400).json({
        message:"couldnt delete the room"
      })
    }
    

}

export async function UpdateRoom(req:Request,res:Response){
    const RoomKey = JSON.stringify(req.body.RoomKey)
    //@ts-ignore
    
    const email = req.email
    try {

      const room = await db.room.update({
        where:{
        RoomKey:RoomKey
      },
      data:{
        users:{
         connect:{
          email
         }
        }
      }
    })
    res.status(200).json({
      message:"succesfully updated room"
    })
    
    
  }
  catch(e){
    res.status(500).json({
      message:"couldnt update the room",
      RoomKey
    })
  }
}
