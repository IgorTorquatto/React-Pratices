import PropTypes from "prop-types";
import { ContainerCard } from "./styles";

export function CardCharacter({ image, name, genre, specie}){
    return(
        <ContainerCard>
            <div className="image">
                <img src={image} alt="Personagem"/>
            </div>
            <div className="info">
                <h3>{name}</h3>
                <ul>
                    <li>Gênero: {genre}</li>
                    <li>Espécie: {specie}</li>
                </ul>
            </div>
        </ContainerCard>
    )
}

CardCharacter.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    genre: PropTypes.string,
    specie: PropTypes.string
}