import styled from "styled-components";

export const StyledTextoSubTitle = styled.span`
font-weight: 700;
font-size: ${(props) => props.fontSize ? props.fontSize : "30px"};
line-height: 30px;
color: ${({ theme }) => theme.colors.textprimary};

@media screen and (max-width: 1024px) {
    font-size: 20px;
}
`