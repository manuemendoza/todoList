import { createStore } from "redux"

const initiaState = {
    todo:[{
        tarea: "Aprender Redux",
        descripcion: "Ver Videos"
    }],
    token: null
};

const reduce = (initialState=initiaState, action) =>{
    switch (action.type) {
        case "ADD_TODO":
            return {
                    ...initialState,
                    todo: initialState.todo.concat(action.payload)
                }
        case "ADD_TOKEN":
            return {
                    ...initialState,
                    token: action.payload // AQUI NO ES UN CONCAT
                }
        case "DETETE_TOKEN":
            return {
                    ...initialState,
                    token: null // AQUI NO ES UN CONCAT
                }
        default:
            return initialState;
    }
};

export default createStore(reduce)
