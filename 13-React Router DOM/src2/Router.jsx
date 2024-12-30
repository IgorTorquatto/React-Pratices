import { Routes,Route } from "react-router-dom";

import { Pagina1 } from "./pages/Pagina1";
import { Pagina2 } from "./pages/Pagina2";
import { Pagina3 } from "./pages/Pagina3";

export function Router(){
    return(
        <Routes>
            <Route path="/home" element={<Pagina1/>}/>
            <Route path="/pagina2" element={<Pagina2/>}/>
            <Route path="/pagina3" element={<Pagina3/>}/>
        </Routes>
    )
}