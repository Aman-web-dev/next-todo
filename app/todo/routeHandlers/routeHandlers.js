"use server"
 const server_url=process.env.SERVER_URL



export const addTodoInDb = async (todo, url) => {
  const newTodo = {
    title: todo.title,
    description: todo.description,
    status: todo.status,
    user_id: todo.user_id,
  };



  const result = await fetch(`${server_url}${url}`, {
    method: "POST",
    body: JSON.stringify(newTodo),
    headers: { "Content-Type": "application/json" },
    bodyParser: false,
  });

  if (result.ok) {
    
    return "The Todo Has Been Added Successfully";
  }
};

export const fetchTodoData = async (url,user_id) => {
  try {
    const response = await fetch(`${server_url}${url}?user_id=${user_id}`, {
      method: "GET",
      cache: "no-cache",
    });

    const data = await response.json();
    return data.data;
  } catch (error) {
    throw error;
  }
};

export const deleteTodo = async (url,todo_id) => {
  try {
    console.log("Todo id",todo_id)
    const response = await fetch(`${server_url}${url}`, {
      method: "DELETE",
      body:JSON.stringify({todo_id:todo_id})
    });
   

    if (response.ok) {
      console.log("User Deleted Successfully");
    }

  } catch (error) {
    console.log(error)
    throw error
  }
};


export const UpdateTodoStatus = async (url,id,value) => {
  console.log("value",value,id,`${server_url}${url}`)
  try {
    
    const response = await fetch(`${server_url}${url}`, {
      method: "PUT",
      body:JSON.stringify({todo_id:id,status:value})
    });

    if (response.ok) {
      console.log("User Updated Successfully");
    }

    if (!response.ok) {
      console.log(response)
      
    }
  } catch (error) {
    throw error
  }
};



