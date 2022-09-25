import styled from "styled-components";

export const StyledListSmallCards = styled.section`
width: 100%;
display: grid;
grid-template-columns: auto auto auto;
column-gap: 20px;
row-gap: 20px;

@media screen and (max-width: 1200px) {
    grid-template-columns: auto auto;
}

@media screen and (max-width: 800px) {
    grid-template-columns: auto;
}

/* @media screen and (max-width: 1200) {
    grid-template-columns: auto ;
} */

/* @media screen and (max-width: 500px) {
    grid-template-columns: auto;
    
} */

`