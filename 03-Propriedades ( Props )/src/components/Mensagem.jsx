export function Mensagem({msg}){
    return(
        <p>{msg}</p>
    )
}

Mensagem.defaultProps = {
    msg: 'Default message'
}