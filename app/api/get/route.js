export const dynamic = 'force-dynamic'
import prisma from '../../../lib/prisma'
import { NextResponse } from "next/server";


 const GET =async(req,res)=>{
    console.log(req)
    console.log("i got the call")
    try{
      const todo = await prisma.todo.findMany()
    //   console.log("todo",todo)
          return NextResponse.json({ data: todo},{ status: 201 });
    }catch(error){
        return NextResponse.json({ error: error }, { status: 500 });
    }
 }


 export {GET}



