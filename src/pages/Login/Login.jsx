import { useState } from "react";
import { useAuthContext } from "../../contexts";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
  ButtonStyled,
  Input,
  InputContainer,
  TextLabel,
  Paper,
  TextTitle,
  TextoDesc,
} from "../../components";
import { StyledDiv, StyledForm, StyledLogin } from "./StyledLogin";
import { toast } from "react-toastify";

export const Login = () => {
  const { authenticated, login } = useAuthContext();

  const { register, handleSubmit } = useForm();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (data) => {
    
    setEmail(data.email);
    setPassword(data.password);
    login(data);
    
  };

  return (
    <Paper>
      <StyledLogin>
        <TextTitle>Acessar</TextTitle>

        <StyledForm onSubmit={handleSubmit(handleLogin)}>
          <InputContainer>
            <TextLabel htmlFor="user">Usuário:</TextLabel>
            <Input
              {...register("email", { required: true })}
              type={"email"}
              id={"email"}
              placeholder={"Seu e-mail"}
            />
          </InputContainer>
          <InputContainer>
            <TextLabel htmlFor="password">Senha:</TextLabel>
            <Input
              {...register("password", { required: true })}
              type={"password"}
              id={"password"}
              placeholder={"Sua senha"}
            />
          </InputContainer>
          <StyledDiv>
            <ButtonStyled type="submit">ACESSAR</ButtonStyled>
          </StyledDiv>
        </StyledForm>
        <div>
          <Link to="/cadastro"><TextoDesc fontSize={"15px"}>
            Cadastrar novo usuário
          </TextoDesc></Link>
        </div>
      </StyledLogin>
    </Paper>
  );
};
