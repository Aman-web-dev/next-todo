'use client'

import { fetchTodoData ,addTodoInDb ,UpdateTodoStatus ,deleteTodo} from '@/app/todo/serverActions/serverActions';
import React, { createContext, useState, useContext } from 'react';
import { useAuth } from './authContext';



const TodoContext = createContext({
  todos: [],
  addTodo: (todo,user_id) => {},
  updateTodo: (todo_id, updatedData,user_id) => {},
  deleteOneTodo: (todo_id,user_id) => {},
  fetchTodo:(user_id)=>{},
});

export const useTodos = () => useContext(TodoContext);

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = async (newTodo,user_id) => {
    const result = await addTodoInDb(newTodo, "api/post")
    console.log(result)
    fetchTodo(user_id)
  };

  const updateTodo = async (todo_id, updatedData,user_id) => {
  const res=await   UpdateTodoStatus("api/put", todo_id, updatedData);
    fetchTodo(user_id)
  };

  const deleteOneTodo = async (todo_id,user_id) => {
   const res= await  deleteTodo("api/delete", todo_id);
    fetchTodo(user_id)
  };
  
  const fetchTodo=async(user_id)=>{
    const data = await fetchTodoData("api/get",user_id);
    setTodos(data)
  }

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, updateTodo, deleteOneTodo,fetchTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};