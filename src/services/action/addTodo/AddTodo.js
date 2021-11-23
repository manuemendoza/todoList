export const addTodo = (tarea, descripcion)=>{
    return({
        type:"ADD_TODO",
        payload:{
            "tarea": tarea,
            "descripcion": descripcion
        }
    })
};