import { ADD_TODO,UPDATE_STATUS,UPDATE_ITEMS,GET_ITEMS,DELETE_ITEMS } from "./actionType.js"

const initState = { Todo: [], count: 0 };
export const Reducer = (state=initState, { type, payload }) => {
    switch (type)
    {
        case ADD_TODO:
            const UpdateTodo = [...state.Todo, payload];
            return { ...state, Todo: UpdateTodo, count: state.count += 1 };
        case UPDATE_STATUS:
            const toggle = state.Todo.map((item) => item.id === payload ? { ...item, status: !item.status, count: item.status?state.count += 1:state.count -= 1 } : item); 
            return { ...state, Todo: toggle };
        case UPDATE_ITEMS:
            const Update_data = state.Todo.map((item) => item.id === payload.id ? { ...item, title: payload.title } : item);
            return { ...state, Todo: Update_data };
        case GET_ITEMS:
            const get_items = state.Todo.map((item) => item.id === payload ? { ...item, title: item.title } : item);
            return { ...state, Todo: get_items };
        case DELETE_ITEMS:
            const delete_items = state.Todo.filter(todo => todo.id !== payload);
            return { ...state, Todo: delete_items, count: state.count > 0?state.count -= 1:0};
        default: return state;
    }
}