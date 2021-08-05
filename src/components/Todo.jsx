import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo,updateStatus,deleteItem } from '../store/action';
import { TodoInput } from './TodoInput';
import { Total } from "./total";
import {Link} from "react-router-dom";
export const Todo = () => {
    const dispatch = useDispatch();
    const todo = useSelector((state) => state.Todo);
    const handletask = (payload) =>
    {
        dispatch(addTodo(payload));
    }

    const handleToggle = (id) => {
        dispatch(updateStatus(id));
    }

    const handleDelete = (id) =>
    {
         
        dispatch(deleteItem(id));
        console.log(todo);
    }
    return (
        <>
            <h1>Todo App</h1>
            <TodoInput handletask={handletask} />
            <Total/>
            {todo && todo.map((e) => {

                return <div key={e.id}>
                    <h3><Link to={`/todo/${e.id}`}>{e.title}</Link></h3>
                    <h3>Status is : {String(e.status)}</h3>
                    <button onClick={() => {
                        handleToggle(e.id)
                    }}>Toggle Status</button>
                    <button onClick={() => { handleDelete(e.id);}}>Delete</button>
                </div>
                
            })}
        </>
    );
}