import React, { useReducer, useState } from 'react'

const taskReducer = (state,action) => {
    switch(action.type){
        case 'ADD_TASK':
            return [...state,{id:Date.now(),text:action.payload,completed:false}]
        case 'REMOVE':
            return state.filter((task)=> task.id!== action.payload);
        case 'TOGGLE_TASK':
            return state.map((task) => task.id === action.payload ? {...task,completed:!task.completed}:task)
        default:
            return state;
    }
}

export default function TwentyTwo() {

    const [tasks,dispatch] = useReducer(taskReducer,[]);

    const [taskText,settaskText] =  useState('');

    const addTask = () => {
        dispatch({type:'ADD_TASK',payload:taskText});
    }

  return (
    <div>
      <h1>Todo List</h1>
      <input type='text' value={taskText} onChange={(e)=>settaskText(e.target.value)} placeholder='Add new Task'/>
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((task)=>(
            <li key={task.id}>
                <span
                style={{textDecoration:task.completed ? 'line-through' : 'none'}}
                onClick={()=> dispatch({type:'TOGGLE_TASK',payload:task.id})}
                >
                    {task.text}
                </span>
                <button onClick={()=> dispatch({type:'REMOVE',payload:task.id})}>REMOVE</button>
            </li>
        ))}
      </ul>
    </div>
  )
}
