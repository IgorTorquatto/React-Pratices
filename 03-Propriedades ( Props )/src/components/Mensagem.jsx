import PropTypes from "prop-types"

export function Mensagem({msg}){
    return(
        <p>{msg}</p>
    )
}

Mensagem.propTypes = {
    msg: PropTypes.string
} 

Mensagem.defaultProps = {
    msg: 'Default message'
}