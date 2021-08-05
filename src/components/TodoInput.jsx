import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
export const TodoInput = ({handletask}) => {
    const [task, setTask] = useState("");
    const handleAddTask = () => {
        const payload = {
            title: task,
            status: false,
            id:uuid()
        }
        handletask(payload);
    };
    return (<>
        <input type="text" placeholder="Enter todo title" onChange={ (e)=>{setTask(e.target.value)}} value={task }/>
        <button onClick={handleAddTask}>Add</button>
    
    </>);
}