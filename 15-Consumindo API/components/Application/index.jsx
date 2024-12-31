import { useEffect,useState } from "react";
import axios from 'axios';
import { CardCharacter } from "../CardCharacter";
import { Container, ContentCharacters, Header, Loader } from "./styles";
import IconLoader from '../../assets/loader.gif';

export function Application(){

    const [characters,setCharacters] = useState([]);
    const [page,setPage] = useState(1);
    const [countPages,setCountPages] = useState('');
    const [qtdCharacters,setQtdCharacters] = useState('');
    const [isLoader,setIsLoader] = useState(true);
    
    useEffect(()=>{
        axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
        .then(response=>{
            const array = [...characters, ...response.data.results]
            setCharacters(array)
            setCountPages(response.data.info.pages)
            setQtdCharacters(response.data.info.count)
            setIsLoader(false)
        })
    },[page])

    return (
        <>
        {
            isLoader && (
            <Loader>
                <img src={IconLoader}></img>
            </Loader>
            )
        }
         <Container>
            <Header>
                <h1>Ricky and Morty</h1>
                <span>Quantidade de personagens: {qtdCharacters}</span>
            </Header>
            <ContentCharacters>
                <div>
                    {
                        characters && characters.map(({ image,name,species,genre }, index)=>{
                            return(
                                <CardCharacter key={index}
                                    image={image}
                                    name={name}
                                    genre={genre}
                                    specie={species}
                                />
                            )
                        })
                    }
                </div>
                {
                    (!(page === countPages)) && <button onClick={()=>{setPage(page+1)}}>Carregar mais</button>
                }
            </ContentCharacters>
        </Container>
        </>
    )
}