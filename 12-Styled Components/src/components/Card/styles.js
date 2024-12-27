import styled from "styled-components";

export const H2 = styled.h2`
    font-size: 32px;
    color: purple;
`

export const SectionDiv = styled.div`
    border: solid 2px black;
    p{
        color: ${({isTrue})  => (isTrue===true) ? 'green' : 'red'};
    }
    button{
        padding: 20px;
    }

`