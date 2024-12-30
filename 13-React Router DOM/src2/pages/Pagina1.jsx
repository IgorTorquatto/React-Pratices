import { Link } from "react-router-dom";

export function Pagina1(){
    return(
        <>
            Pagina1
            <Link to="/pagina2">Página2</Link>
            <Link to="/pagina3">Página3</Link>
        </>
    )
}