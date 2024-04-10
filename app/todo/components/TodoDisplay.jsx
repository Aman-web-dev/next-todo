"use client";
import { useEffect, useState, useMemo } from "react";
import TodoCards from "./TodoCards";
import { fetchTodoData } from "../serverActions/serverActions";
import { useAuth } from "@/context/authContext";
import LoadingComponent from "./Loading";
import { deleteTodo } from "../serverActions/serverActions";

function TodoDisplay({ newTodo }) {
  
  const [todos, setTodos] = useState();
  const [waiting, setWaiting] = useState(true);

  const getData = async () => {
    setWaiting(true);
    const data = await fetchTodoData("api/get");
    setTodos(data);
    setWaiting(false);
  };



  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="grid grid-cols-4">
      {waiting ? (
        <LoadingComponent />
      ) : (
        todos?.map((elem, index) => {
          return (
            <TodoCards
              key={elem.todo_id}
              title={elem.title}
              desc={elem.Description}
              status={elem.status}
              
              todo_id={elem.todo_id}
            />
          );
        })
      )}
    </div>
  );
}

export default TodoDisplay;
