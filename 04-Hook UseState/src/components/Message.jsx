import { useState } from 'react';

export function Message(){

    const [msg,setMsg] = useState(false);

    return(
        <div>
            <button onClick={()=> {setMsg(true)}}>Exibir mensagem</button>
            {
                (msg) && <p>Exibindo mensagem porque estado é verdade</p>
            }
        </div>
    )
}