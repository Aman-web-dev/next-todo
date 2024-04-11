"use client";
import { useEffect, useState } from "react";
import TodoCards from "./TodoCards";
import LoadingComponent from "./Loading";
import { useTodos } from "@/context/todoDataContext";
import { useAuth } from "@/context/authContext";



function TodoDisplay(props) {
  const {currentUser}=useAuth()

  const {waiting,todos,fetchTodo}=useTodos()

  const getData = async () => {
   fetchTodo(currentUser.uid,true)
  };

  useEffect(() => {
    if(props.changed==false){
      getData()
    }
  }, []);

 

  return (
    <div className="flex flex-wrap gap-4 p-4">

      
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
