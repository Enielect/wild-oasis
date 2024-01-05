import { styled, css } from "styled-components";

const Heading = styled.h1`
/* border-right: 2px solid black; */
 ${prop => prop.as === 'h1' && css`
    font-size: 3rem;
    font-weight: 10;
    padding: 2rem 1.6rem;
 `} 

 ${prop => prop.type === 'dashboardHeader' && css`
   background-color: white;
 `}
 
 ${prop => prop.as === 'h2' && css`
    font-size: 2rem;
    font-weight: 10;
    padding: 2rem 1.6rem;
 `} 
`

export default Heading