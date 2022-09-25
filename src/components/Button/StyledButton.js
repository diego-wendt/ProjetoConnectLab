import styled from "styled-components";

export const StyledButton = styled.button`


padding: 10px 24px;
height: 38px;
color:#fff;
border: none;
background: ${({ theme }) => theme.colors.textTitle};
border-radius: 40px;

font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 18px;
cursor:pointer;

`