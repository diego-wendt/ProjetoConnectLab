import styled from "styled-components";

export const StyledSmallCard = styled.div`
width: 100%;
padding: 20px 20px 20px 0px;
display: flex;
align-items: center;
justify-content: space-between;
`
export const StyledGroupData = styled.span`
display: flex;
flex-direction:column;
width: 60%;
justify-content: center;
align-items: center;
gap: 20px;
`;

export const StyledPowerButton= styled.button`
width: 60px;
height: 60px;
display: flex;
justify-content: center;
align-items: center;
background-color: ${props => props.isOn ? "green" : "red"};
border-radius: 50%;
border-style: none;
font-size: 40px;
color: white;
`;
