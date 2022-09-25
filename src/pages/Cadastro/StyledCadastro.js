import styled from "styled-components";

export const StyledForm = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 30px;
  row-gap: 15px;


@media screen and (max-width: 700px) {
    grid-template-columns: auto;
}
`;

export const StyledDivBotoes = styled.div`
padding:20px 0px;
display: flex;
flex-direction: row;
justify-content: center;
gap: 40px;
`;