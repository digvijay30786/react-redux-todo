import { ADD_TODO,UPDATE_STATUS,UPDATE_ITEMS,GET_ITEMS,DELETE_ITEMS } from "./actionType"

export const addTodo = (payload) => {
    return{type:ADD_TODO,payload}
}

export const updateStatus = (payload) =>
{
    return { type: UPDATE_STATUS, payload};
}

export const editTodo = (payload) =>
{
    return { type: UPDATE_ITEMS, payload};
}

export const get_data = (payload) => {

    return { type: GET_ITEMS, payload};
}

export const deleteItem = (payload) => {
    return { type: DELETE_ITEMS, payload};
}