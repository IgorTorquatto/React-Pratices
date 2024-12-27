import PropTypes from "prop-types"

export function Input({inputType,inputValue,setInputValue}){
    return(
        <input
            type={inputType}
            value={inputValue}
            onChange={(event)=>setInputValue(event.target.value)}
        ></input>
    )
}

Input.propTypes = {
    inputType : PropTypes.string,
    inputValue: PropTypes.string,
    setInputValue: PropTypes.string
}