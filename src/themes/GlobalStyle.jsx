import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*, ::after, ::before, ul, li,h1,h2,h3,h4,h5,h6 {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'DM Sans', sans-serif;
    text-decoration: none;
}

.app{
  min-height: 100vh;
  /* background-color: aquamarine; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}


main{
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 50px 120px;
  gap: 40px;
  /* background-color: #D9D9D9; */
}

@media screen and (max-width: 1024px) {
  main{
    padding: 10px 10px;
  }
}

:root {
  
  /* color-scheme: light dark; */
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
}
`;
