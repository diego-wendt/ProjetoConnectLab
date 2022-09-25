import { useAuthContext, useCustomTheme } from "../../contexts";
import { ButtonStyled, LinkGroup, TextTitle } from "../../components";
import logo from "../../assets/img/logo.png";
import {
  DivButton,
  StyledGroupButtons,
  StyledGroupLogo,
  StyledHeader,
} from "./StyledHeader";

import { Link, useNavigate } from "react-router-dom";

export const HeaderBar = () => {
  const { authenticated, logout, acessarLoginPage } = useAuthContext();
  const { handleTheme } = useCustomTheme();

  const navigate = useNavigate;

  const handleLogin = () => {
    acessarLoginPage();
  };

  const handleLogout = () => {
    logout();
  };

  const alterarTema = () => {
    // console.log("alterar tema")
    handleTheme();
  };

  return (
    <StyledHeader>
      <StyledGroupLogo>
        <Link to="/home">
          <img src={logo} alt="Logo" className="image" />
        </Link>
        <Link to="/home">
          <TextTitle>Connect Lab</TextTitle>
        </Link>
      </StyledGroupLogo>
      {authenticated ? (
        <StyledGroupButtons>
          <LinkGroup />
          <DivButton>
            <ButtonStyled onClick={alterarTema}>Alterar tema</ButtonStyled>
            <ButtonStyled onClick={handleLogout}>LOGOUT</ButtonStyled>
          </DivButton>
        </StyledGroupButtons>
      ) : (
        <StyledGroupButtons>
          <ButtonStyled onClick={alterarTema}>Alterar tema</ButtonStyled>
          <ButtonStyled onClick={handleLogin}>LOGIN</ButtonStyled>
        </StyledGroupButtons>
      )}
    </StyledHeader>
  );
};
