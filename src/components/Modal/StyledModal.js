import styled from "styled-components";

export const StyledModal = styled.section`
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
z-index: 1000;
`
export const StyledOverlay = styled.div`

position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: rgba(0, 0, 0, 0.8);
z-index: 1000;
/* cursor: pointer; */
`