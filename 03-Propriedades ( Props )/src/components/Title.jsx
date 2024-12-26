import PropTypes from "prop-types"

export function Title(props){
    return(
        <h1>{props.titulo}</h1>
    )
}

Title.propTypes = {
    titulo: PropTypes.string,
}

Title.defaultProps = {
    titulo: "Default title"
}