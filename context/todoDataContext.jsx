'use client'

import { fetchTodoData ,addTodoInDb ,UpdateTodoStatus ,deleteTodo} from '@/app/todo/routeHandlers/routeHandlers';
import React, { createContext, useState, useContext } from 'react';
import { useAuth } from './authContext';



const TodoContext = createContext({
  todos: [],
  waiting:false,
  addTodo: (todo,user_id) => {},
  updateTodo: (todo_id, updatedData,user_id) => {},
  deleteOneTodo: (todo_id,user_id) => {},
  fetchTodo:(user_id)=>{},
});

export const useTodos = () => useContext(TodoContext);

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [waiting,setWaiting]=useState(false)
  const [loading,setLoading]=useState(false)

  const addTodo = async (newTodo,user_id) => {
    const result = await addTodoInDb(newTodo, "api/post")
   
    fetchTodo(user_id,false)
  };

  const updateTodo = async (todo_id, updatedData,user_id) => {
  const res=await   UpdateTodoStatus("api/put", todo_id, updatedData);
    fetchTodo(user_id,false)
  };

  const deleteOneTodo = async (todo_id,user_id) => {
   const res= await  deleteTodo("api/delete", todo_id);
    fetchTodo(user_id,false)
  };
  
  const fetchTodo=async(user_id,initialLoad)=>{

    if(initialLoad){
      setWaiting(true)
      const data = await fetchTodoData("api/get",user_id);
      setTodos(data)
      setWaiting(false)
    }else{
      setLoading(true)
      const data = await fetchTodoData("api/get",user_id);
      setTodos(data)
      setLoading(false)
    }
  
  }

  return (
    <TodoContext.Provider
      value={{ todos,waiting, addTodo, updateTodo, deleteOneTodo,fetchTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};