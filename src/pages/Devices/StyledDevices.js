import styled from "styled-components";

export const StyledDevices = styled.section`
display: flex;
flex-direction:column;
width: 100%;

@media screen and (max-width: 500px) {
}
`

export const StyledLineSearch = styled.div`
display: flex;
flex-direction:row;
gap: 20px;
padding-bottom: 20px;

@media screen and (max-width: 500px) {
flex-direction: column;
}
`

export const StyledSearchLabel = styled.input`
width: 100%;
height: 35px;
font-weight: 400;
font-size: 20px;
line-height: 150%;
padding: 10px;
color: #5D6D7E;
border-color: blue;
border-width: 1px;
border-radius: 3px;
`