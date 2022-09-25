import styled from "styled-components";

export const StyledAnchor = styled.li`
list-style: none;

span{
color: ${({ theme }) => theme.colors.textTitle};
font-weight: 500;
font-size: 24px;
line-height: 31px;
}
`