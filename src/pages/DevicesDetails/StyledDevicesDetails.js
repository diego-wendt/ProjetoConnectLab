import styled from "styled-components";

export const StyledDevicesDetails = styled.section`
/* width: 330px; */
/* height: 550px; */
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
padding: 30px 48px;
gap: 20px;
`

export const StyledDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const StyledDivLine = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 4px;
`

export const StyledDivLineButton = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 20px;
`

export const StyledDivDetails = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 1px;
`
export const StyledHr = styled.hr`
width: 100%;
`


export const StyledTexto1 = styled.span`
font-weight: 400;
font-size: 14px;
line-height: 18px;
color: #5D6D7E;
`

export const StyledTexto2 = styled.span`
font-weight: 500;
font-size: 16px;
line-height: 21px;
color: #5D6D7E;
`

export const StyledTexto3 = styled.span`
font-weight: 700;
font-size: 16px;
line-height: 21px;
color: #2E4052;
`

export const StyledPowerButton= styled.button`
width: 40px;
height: 40px;
display: flex;
justify-content: center;
border: none;
align-items: center;
background-color: ${props => props.isOn ? "green" : "red"};
border-radius: 50%;
font-size: 20px;
color: white;
`;