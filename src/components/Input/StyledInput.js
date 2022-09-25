import styled from "styled-components";

export const StyledInput = styled.input`

width: 300px;
height: 35px;
font-weight: 400;
font-size: 15px;
line-height: 150%;
padding: 10px;
color: #5D6D7E;
border-color: blue;
border-width: 1px;

&:focus{
    border-color: red;
}
`