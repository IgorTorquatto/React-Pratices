import { H2,SectionDiv } from "./styles"

export function Card(){
    return(
    <div>
        <H2>Title Card</H2>
        <SectionDiv isTrue={true}>
            <p>Lorem, ipsum dolor.</p>
            <button>Button</button>
        </SectionDiv>
    </div>)
}