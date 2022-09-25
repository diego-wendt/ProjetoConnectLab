import styled from "styled-components";

export const StyledModalCadastroDispositivo = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
justify-content: center;
align-items: center;
`

export const StyledOption = styled.option`

`
export const StyledSelect = styled.select`
width: 300px;
height: 35px;
font-weight: 400;
font-size: 15px;
line-height: 150%;

color: #5D6D7E;
border-color: blue;
border-width: 1px;

&:focus{
    border-color: red;
}
`


export const StyledDivButtons= styled.div`

display: flex;
flex-direction: row;
gap: 20px;
`