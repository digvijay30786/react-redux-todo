import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router";
import { editTodo,get_data } from "../store/action.js";
import { GET_ITEMS } from "../store/actionType.js";

export const EditTodo = () => 
{
    
    const { id } = useParams();
    const dispatch = useDispatch();
    const data = useSelector((state) => state.Todo);
    const [val, setVal] = useState("");
    const [valid, setValid] = useState(false);
    const handleUpdate = () =>
    {
        dispatch(editTodo({ id, title: val }));
        setValid(true);
    }

    const get_data_item = () =>
    {
        dispatch(get_data(id));
        
    }

    useEffect(() => {
        get_data_item();
    },[])
    return valid?<Redirect to ='/'/>:(<div style={{marginTop:'50px'}}>

        <h3>Update Todo-items</h3>
        {
            data!=""?
            data.map((item) =>
            {
                //item.id === id ? setVal(item.title) : "";
                return item.id === id?(<><textarea rows="6" cols="50" defaultValue={item.title}  onChange={(e)=>{setVal(e.target.value)}}/>
                <div>
                <button onClick={handleUpdate}>Update Todo</button>
                </div></>):"";
            }):<h1>ID Does Not Exists</h1>
        }
    </div>)
}