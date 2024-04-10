"use server";








export const addTodoInDb = async (todo,url) => {
  const newTodo = {
    title: todo.title,
    description: todo.title,
    status: todo.status,
  };

  const result = await fetch(
    url,
    {
      method: "POST",
      body: JSON.stringify(newTodo),
      headers: { "Content-Type": "application/json" },
    }
  );

  if (result.ok) {
    console.log("DONE DONA DAN DAN"); 
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
        console.log("result:", data);
    
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
    