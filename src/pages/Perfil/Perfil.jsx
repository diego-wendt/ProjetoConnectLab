import { Link, useNavigate } from "react-router-dom";
import {
  ButtonStyled,
  Paper,
  TextoDesc,
  TextoSubTitle,
  TextTitle,
} from "./../../components";
import {
  StyledDivColumn,
  StyledDivColumnAddress,
  StyledDivLine,
  StyledImage,
  StyledPerfil,
  StyledSubtitle,
  StyledText,
} from "./StyledPerfil";

import { GetUsuario, StoreUserData } from "../../service";
import { useState, useEffect } from "react";

export const Perfil = () => {
  const navigate = useNavigate();

  const [profile, setProfile] = useState("");

  const loadPerfil = async () => {
    try {
      const dados = await GetUsuario();
      setProfile(dados);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadPerfil();
  }, []);

  const handleEditar = () => {
    StoreUserData(JSON.stringify(profile));
    navigate("/cadastro");
  };

  return profile ? (
    <Paper>
      <StyledPerfil>
        <TextTitle>Meu Perfil</TextTitle>
        <StyledDivLine>
          <StyledImage>
            <img src={profile.photoUrl} alt="" width={"70px"} />
          </StyledImage>
          <StyledDivColumn>
            <TextoSubTitle fontSize={"20px"}>{profile.fullName}</TextoSubTitle>
            <TextoDesc>{profile.email}</TextoDesc>
            {profile.phone ? <TextoDesc>{profile.phone}</TextoDesc> : ""}
          </StyledDivColumn>
        </StyledDivLine>
        <TextoSubTitle fontSize={"20px"}>Endereço</TextoSubTitle>
        <StyledDivColumnAddress>
          <hr />
          <TextoDesc fontSize={"20px"}>
            {profile.userAddress.street}, nº {profile.userAddress.number}
          </TextoDesc>
          <TextoDesc fontSize={"20px"}>
            {profile.userAddress.complement}, nº{" "}
            {profile.userAddress.neighborhood}
          </TextoDesc>
          <TextoDesc fontSize={"20px"}>
            {profile.userAddress.city}, {profile.userAddress.state}
          </TextoDesc>
          <TextoDesc fontSize={"15px"}>{profile.userAddress.zipCode}</TextoDesc>
        </StyledDivColumnAddress>
        <ButtonStyled onClick={handleEditar}>EDITAR</ButtonStyled>

        <TextoDesc>
          <Link to="/home">Sair</Link>
        </TextoDesc>
      </StyledPerfil>
    </Paper>
  ) : (
    <TextTitle>...CARREGANDO DADOS...</TextTitle>
  );
};
