"use server";








export const addTodoInDb = async (todo,url) => {
  const newTodo = {
    title: todo.title,
    description: todo.title,
    status: todo.status,
    user_id:todo.user_id
  };

  console.log("newTodo",newTodo)

  const result = await fetch(
    url,
    {
      method: "POST",
      body: JSON.stringify(newTodo),
      headers: { "Content-Type": "application/json" },
      bodyParser:false,
    } 
  );

  if (result.ok) {
    console.log("DONE DONA DAN DAN"); 
    return "The Todo Has Been Added Successfully"
  }
};


export const fetchTodoData = async () => {
    try {
        const response = await fetch("https://6615a2b3b8b8e32ffc7b6c8a.mockapi.io/next-todo/todo", {
            cache: 'no-cache'
        });
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}
    