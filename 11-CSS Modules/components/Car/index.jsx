import PropTypes from "prop-types"
import styles from './Car.module.css'

export function Car({name, description,value}){
    return (
        <div>
            <h1 className={styles.nameCar}>{name}</h1>
            <p>{description}</p>
            <h2>{value} R$</h2>
            <button>Comprar</button>
        </div>
    )
}


Car.propTypes ={
    name: PropTypes.string,
    description: PropTypes.string,
    value: PropTypes.number
}