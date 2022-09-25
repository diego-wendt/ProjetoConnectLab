import styled from "styled-components";

export const StyledPerfil = styled.section`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 20px;
padding: 0px 50px;

@media screen and (max-width: 600px) {
    width: 100%;
    padding: 10px 10px;
}
`
export const StyledImage = styled.div`
background-color: gray;
width: 60px;
height: 60px;
border-radius: 50%;
`

export const StyledDivLine = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 20px;
padding-top: 30px 0px;
`
export const StyledDivColumn = styled.div`
display: flex;
flex-direction: column;
`
export const StyledDivColumnAddress = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`

export const StyledSubtitle = styled.div`
font-weight: 700;
font-size: 14px;
line-height: 18px;
`
export const StyledText = styled.div`
font-weight: 400;
font-size: 12px;
line-height: 16px;
`