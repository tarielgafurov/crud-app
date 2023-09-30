import { ADD_TODO, DELETE_TODO } from '../actions/Actions';

const initState = {
    items: []
}

export const Reducer = (state = initState , action) => {
    switch(action.type){
        case ADD_TODO:
           {
            return {
                items: [...state.items, {text: action.text, id: action.id}]
            }
           }
        case DELETE_TODO: 
        return {
            items: [...state.items.filter((el) => action.id !== el.id)]
        }
        default:
            return state
    }
}

