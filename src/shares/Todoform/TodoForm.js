import store from "../../services/store/store";
import { addTodo } from "../../services/action/addTodo/AddTodo";

const TodoForm = () =>{

    const handleClick = (event) =>{
        event.preventDefault();

        let tarea = event.target.tarea.value;
        let descripcion = event.target.descripcion.value;

        console.log(tarea);
        console.log(descripcion);

        store.dispatch(addTodo(tarea, descripcion))
    };

    return(
        <div>
            <h2>Introduce tu tarea</h2>
            <form onSubmit={(event)=>handleClick(event)} >
                <input 
                type="text" 
                name="tarea"
                placeholder="Escribe tu Tarea"/><br/>
                <input 
                type="text"
                name="descripcion"
                placeholder="que vas a hacer" /><br/>
                <input type="submit"/>
            </form>
        </div>
    )
};
export default TodoForm