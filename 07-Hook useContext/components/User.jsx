import { useContext } from "react";
import UserContext from "../context/UserContext";

export function User(){
    const { nome } = useContext(UserContext);

    return(
        <div>
            { nome }
        </div>
    )
}