export function Title(props){
    return(
        <h1>{props.titulo}</h1>
    )
}

Title.defaultProps = {
    titulo: "Default title"
}