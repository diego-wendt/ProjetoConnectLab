import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { FooterBar, HeaderBar } from "../../components";
import { AuthContextProvider, useCustomTheme } from "../../contexts";
import { GlobalStyle } from "../../themes";
import { Router } from "../../router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AppLayout = () => {
  const { theme } = useCustomTheme();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <AuthContextProvider>
          <div className="app">
            <HeaderBar />
            <main className="main">
              <Router />
            </main>
            <FooterBar></FooterBar>
          </div>
          <ToastContainer />
        </AuthContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};
