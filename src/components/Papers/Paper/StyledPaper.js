import styled from "styled-components";

export const StyledPaper = styled.section`
/* width: 100%; */
padding: 36px 48px 36px 48px;
background-color: ${({ theme }) => theme.colors.backgroundCard};
box-shadow: 0px 4px 4px 0px #00000040;
border-radius: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

@media screen and (max-width: 1024px) {
    width: 100%;
    padding: 10px 10px;
}

`