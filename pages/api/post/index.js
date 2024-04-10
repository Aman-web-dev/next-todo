
import prisma from '../../../lib/prisma'


export default async function handleTodoPost(req, res) {
    const { title,description,user_id,status} = req.body;
  
  
    const result = await prisma.todo.create({
      data: {
        title: title,
        description:description,
        user_id:user_id,
        status:status,
         },
    });
    res.json(result);
  }