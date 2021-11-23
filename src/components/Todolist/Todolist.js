import TodoForm from "../../shares/share/Todoform/TodoForm";
import { useState, useEffect } from "react"
import store from "../../services/store/store";

const Todolist = ()=> {
    
    const [ Todo , setTodo ] = useState([]);

    useEffect(() => {
        setTodo(store.getState().todo);
        store.subscribe(()=>{
            setTodo(store.getState().todo)
        })
        
    }, [])

    return(
        <div>
            <h1>Mis Tareas</h1>
            {Todo.map( element => <li> Mi Tarea: {element.tarea}<br/> descripcion : {element.descripcion}</li>)}
            <TodoForm/>
        </div>
    )
};

export default Todolist
