"use client";
import { useEffect, useState, useMemo } from "react";
import TodoCards from "./TodoCards";
import LoadingComponent from "./Loading";
import { useTodos } from "@/context/todoDataContext";



function TodoDisplay(props) {
  const [waiting, setWaiting] = useState(true);
  const {todos,fetchTodo}=useTodos()

  const getData = async () => {
    setWaiting(true);
   fetchTodo()
    setWaiting(false);
  };

  useEffect(() => {
    if(props.changed==false){
      getData()
    }
  }, [props.changed]);

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
