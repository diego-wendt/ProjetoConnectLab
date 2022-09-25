import styled from "styled-components";

export const TextTitle = styled.h1`
color: ${({ theme }) => theme.colors.textTitle};
font-style: normal;
font-weight: 700;
font-size: ${(props) => props.fontSize ? props.fontSize : "30px"};
line-height: 26px;
`

export const TextoSubTitle = styled.span`
font-weight: 700;
font-size: ${(props) => props.fontSize ? props.fontSize : "30px"};
line-height: 30px;
color: ${({ theme }) => theme.colors.textprimary};

@media screen and (max-width: 1024px) {
    font-size: 20px;
}
`

export const TextoErro = styled.p`
display: block;
font-size: ${props => props.fontSize ? props.fontSize: "14px"};
color: ${({ theme }) => theme.colors.textError};
`

export const TextoDesc = styled.span`
font-weight: 500;
font-size: ${props => props.fontSize ? props.fontSize: "18px"};
line-height: 21px;
color: ${({ theme }) => theme.colors.textsecondary};
`

export const TextLabel = styled.label`
display: block;
color: ${({ theme }) => theme.colors.textLabel};
font-weight: 400;
font-size: ${props => props.fontSize || "16px"};
margin-bottom: 2px;
margin-top: 2px;
`

