import { ADD_TODO, DELETE_TODO } from "../actions/Actions"

export const AddTodo = (text ,id) => {
    return {
        type: ADD_TODO,
        id,
        text
    }
}

export const DeleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        id
    }
}