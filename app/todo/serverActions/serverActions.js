"use server";
import get from "../../api/get/route";




const server_url=process.env.SERVER_URL



export const addTodoInDb = async (todo, url) => {
  const newTodo = {
    title: todo.title,
    description: todo.title,
    status: todo.status,
    user_id: todo.user_id,
  };

  console.log("newTodo", newTodo);

  const result = await fetch(`${server_url}${url}`, {
    method: "POST",
    body: JSON.stringify(newTodo),
    headers: { "Content-Type": "application/json" },
    bodyParser: false,
  });

  if (result.ok) {
    console.log("DONE DONA DAN DAN");
    return "The Todo Has Been Added Successfully";
  }
};

export const fetchTodoData = async (url,user_id) => {
  try {
    const response = await fetch(`${server_url}${url}`, {
      method: "GET",
      cache: "no-cache",
      
    });

    const data = await response.json();
    console.log("data", data.data);
    return data.data;
  } catch (error) {
    throw error;
  }
};

export const deleteTodo = async (todo_id) => {
  try {
    console.log("Todo id",todo_id)
    const response = await fetch(`${server_url}api/delete`, {
      method: "DELETE",
      body:JSON.stringify({todo_id:todo_id})
    });

    if (response.ok) {
      console.log("User Deleted Successfully");
    }

    if (!response.ok) {
      throw new Error(`Failed to delete todo: ${response.statusText}`);
    }
  } catch (error) {
    throw error
  }
};


export const UpdateTodoStatus = async (id,value) => {
  console.log("value",value,id)
  try {
    console.log("value",value)
    const response = await fetch(`${server_url}api/put`, {
      method: "PUT",
      body:JSON.stringify({todo_id:id,status:value})
    });

    if (response.ok) {
      console.log("User Updated Successfully");
    }

    if (!response.ok) {
      console.log(response.statusText)
      throw new Error(`Failed to delete todo: ${response.statusText}`);
    }
  } catch (error) {
    throw error
  }
};