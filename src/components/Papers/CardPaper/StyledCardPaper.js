import styled from "styled-components";

export const StyledCardPaper = styled.div`
/* max-width: 350px;
min-width: 350px; */
background-color: ${({ theme }) => theme.colors.backgroundCard};
box-shadow: 0px 4px 4px 0px #00000040;
border-radius: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

@media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 0px;
    align-items: center;
}
`