import { createStore } from "redux"

const initiaState = {
    todo:[{
        tarea: "Aprender Redux",
        descripcion: "Ver Videos"
    }]
};

const reduce = (todoState=initiaState, action) =>{
    if (action.type === "ADD_TODO") {
        return(
            {
                ...todoState,
                todo: todoState.todo.concat(action.payload)
            }
        )
    }
    return todoState
};

export default createStore(reduce)