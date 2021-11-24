import { useEffect, useState } from "react";
import store from "../../services/store/store";


const Header = () => {
    const [Logeado, setLogeado] = useState(null)
    
    
    useEffect(() => {
        store.subscribe(()=>{
            setLogeado(store.getState().token)
            console.log(store.getState().token);
        })
    }, [])
    
    return(
        <>
        <p>Soy un Header</p>
        {(Logeado) ?<p> estoy logueado</p>  : <p>N o Estoy logueado</p>}
        </>
    )
};

export default Header