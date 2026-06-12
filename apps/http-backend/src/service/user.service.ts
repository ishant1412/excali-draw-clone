import { db } from "@repo/database";
import { User } from "@repo/utils";

export async function finduserByEmail(email:string){

    const user = await db.user.findFirst({
    where: {
      email: email,
    },
  });
  if (user){
    return user
  }
  else{
    return null
  }

}
export async function createUser(data:User):
Promise<Awaited<ReturnType<typeof db.user.create>>>{
    return await db.user.create({data})
}