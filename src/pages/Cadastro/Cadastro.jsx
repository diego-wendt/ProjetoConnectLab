import {
  ButtonStyled,
  Input,
  InputContainer,
  TextLabel,
  Paper,
  TextTitle,
  TextoErro,
} from "../../components";

import { StyledDivBotoes, StyledForm } from "./StyledCadastro";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import YupPassword from "yup-password";
import axios from "axios";
import { toast } from "react-toastify";
import {
  CreateUser,
  GetLoggedUserId,
  GetUsuario,
  UpdateUser,
} from "../../service";
import { useEffect} from "react";

YupPassword(yup);

const isRequired = "Preenchimento obrigatório.";

const Schema = yup
  .object()
  .shape({
    email: yup.string().email().required(isRequired),
    password: yup
      .string()
      .required("Obrigatório digitar uma senha.")
      .min(8, "Senha deve possuir pelo menos 8 dígitos.")
      .minLowercase(1, "Senha deve possuir pelo menos um caractere minúsculo.")
      .minUppercase(1, "Senha deve possuir pelo menos um caractere maiúsculo.")
      .minNumbers(1, "Senha deve possuir pelo menos um número.")
      .minSymbols(1, "Senha deve possuir pelo menos um caracter especial."),
    password2: yup
      .string()
      .oneOf([yup.ref("password"), null], "Senha divergente.")
      .required(isRequired),
    fullName: yup.string().required(isRequired),
    photoUrl: yup.string().url("Digite um endereço válido"),
    phone: yup.string(),
    zipCode: yup
      .string()
      .required(isRequired)
      .min(8, "O CEP deve possui 8 dígitos. Ex: 12345-678")
      .max(9, "O CEP deve possui 8 dígitos"),
    street: yup.string().required(isRequired),
    number: yup.string().required(isRequired),
    neighborhood: yup.string().required(isRequired),
    city: yup.string().required(isRequired),
    state: yup.string().required(isRequired),
    complement: yup.string(),
  })
  .required();

export const Cadastro = () => {
  useEffect(() => {
    onLoad();
  }, []);

  const onLoad = async () => {
    try {
      if (GetLoggedUserId()) {
        const usuario = await GetUsuario();
        populateFields(usuario);
      }
    } catch (error) {
      toast.error("Erro ao buscar dados do usuário.");
    }
  };

  const populateFields = (data) => {
    setValue("email", data.email);
    setValue("fullName", data.fullName);
    setValue("phone", data.phone);
    setValue("city", data.userAddress.city);
    setValue("complement", data.userAddress.complement);
    setValue("neighborhood", data.userAddress.neighborhood);
    setValue("number", data.userAddress.number);
    setValue("state", data.userAddress.state);
    setValue("street", data.userAddress.street);
    setValue("zipCode", data.userAddress.zipCode);
  };

  const {
    register,
    handleSubmit,
    trigger,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
  });

  const handleOnBlur = () => {
    validaCEP();
  };

  const validaCEP = () => {
    trigger("zipCode");
    const CEP = getValues("zipCode");
    if (CEP.length !== 9) {
      return false;
    }
    const URL_CEP = `http://viacep.com.br/ws/${CEP}/json/`;
    buscarCEP(URL_CEP);
  };

  const buscarCEP = (URL_CEP) => {
    axios
      .get(URL_CEP)
      .then((response) => {
        const dataViaCEP = response.data;
        setValores(dataViaCEP);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const setValores = (data) => {
    setValue("city", data.localidade);
    setValue("neighborhood", data.bairro);
    setValue("number", data.complemento);
    setValue("street", data.logradouro);
    setValue("state", data.uf);
  };

  const navigate = useNavigate();

  const atualizaUsuario = async (data) => {
    const usuario = criarObjetoUsuario(data);
    if (!GetLoggedUserId()) {
      try {
        await CreateUser(usuario);
        toast.success("Usuário cadastrado com sucesso");
        navigate("/perfil");
      } catch (error) {
        toast.error("Erro ao cadastrar o usuário");
      }
    } else {
      try {
        await UpdateUser(usuario);
        toast.success("Usuário editado com sucesso.");
        navigate("/perfil");
      } catch (error) {
        toast.error("Erro ao editar o usuário");
      }
    }
  };

  const criarObjetoUsuario = (data) => {
    const Body = {
      email: data.email,
      password: data.password,
      fullName: data.fullName,
      photoUrl: data.photoUrl,
      phone: data.phone,
      userAddress: {
        zipCode: data.zipCode,
        street: data.street,
        number: data.number,
        neighborhood: data.neighborhood,
        city: data.city,
        state: data.state,
        complement: data.complement,
      },
    };

    return Body;
  };

  const cancelar = () => {
    GetLoggedUserId() ? navigate("/home") : navigate("/login");
  };

  return (
    <Paper>
      <TextTitle>Meu Perfil</TextTitle>

      <form onSubmit={handleSubmit(atualizaUsuario)}>
        <StyledForm>
          <InputContainer>
            <TextLabel htmlFor="fullName">Nome completo*:</TextLabel>
            <Input
              {...register("fullName", { required: true })}
              type={"string"}
              id={"fullName"}
              placeholder={"Seu nome"}
            />
            <TextoErro>{errors.fullName?.message}</TextoErro>
          </InputContainer>
          <InputContainer>
            <TextLabel htmlFor="email">E-mail*:</TextLabel>
            <Input
              {...register("email", { required: true })}
              type={"email"}
              id={"email"}
              placeholder={"Seu e-mail"}
            />
            <TextoErro>{errors.email?.message}</TextoErro>
          </InputContainer>
          <InputContainer>
            <TextLabel htmlFor="photoUrl">URL foto perfil:</TextLabel>
            <Input
              {...register("photoUrl", { required: false })}
              type={"string"}
              id={"photoUrl"}
              placeholder={"Sua foto"}
            />
            <TextoErro>{errors.photoUrl?.message}</TextoErro>
          </InputContainer>
          <InputContainer>
            <TextLabel htmlFor="phone">Telefone:</TextLabel>
            <Input
              {...register("phone", { required: false })}
              type={"string"}
              id={"phone"}
              placeholder={"(XX) XXXXX-XXXX"}
            />
            <TextoErro>{errors.phone?.message}</TextoErro>
          </InputContainer>
          <InputContainer>
            <TextLabel htmlFor="password">Senha*:</TextLabel>
            <Input
              {...register("password", { required: true })}
              type={"password"}
              id={"password"}
              placeholder={"Sua senha"}
            />
            <TextoErro>{errors.password?.message}</TextoErro>
          </InputContainer>
          <InputContainer>
            <TextLabel htmlFor="password2">Confirmação de senha*:</TextLabel>
            <Input
              {...register("password2")}
              type={"password"}
              id={"password2"}
              placeholder={"Confirme sua senha"}
            />
            <TextoErro>{errors.password2?.message}</TextoErro>
          </InputContainer>
          <InputContainer>
            <TextLabel htmlFor="zipCode">CEP*:</TextLabel>
            <Input
              {...register("zipCode")}
              type={"string"}
              id={"zipCode"}
              placeholder={"12345-678"}
              onBlur={handleOnBlur}
            />
            <TextoErro>{errors.zipCode?.message}</TextoErro>
          </InputContainer>
          <InputContainer>
            <TextLabel htmlFor="street">Logradouro/Endereço*:</TextLabel>
            <Input
              {...register("street", { required: true })}
              type={"string"}
              id={"street"}
              placeholder={"Seu logradouro/endereço"}
            />
            <TextoErro>{errors.street?.message}</TextoErro>
          </InputContainer>
          <InputContainer>
            <TextLabel htmlFor="number">Número*:</TextLabel>
            <Input
              {...register("number", { required: true })}
              type={"string"}
              id={"number"}
              placeholder={"Seu número"}
            />
            <TextoErro>{errors.number?.message}</TextoErro>
          </InputContainer>
          <InputContainer>
            <TextLabel htmlFor="complement">Complemento:</TextLabel>
            <Input
              {...register("complement", { required: false })}
              type={"string"}
              id={"complement"}
              placeholder={"Seu complemento"}
            />
            <TextoErro>{errors.complement?.message}</TextoErro>
          </InputContainer>
          <InputContainer>
            <TextLabel htmlFor="neighborhood">Bairro*:</TextLabel>
            <Input
              {...register("neighborhood", { required: true })}
              type={"string"}
              id={"neighborhood"}
              placeholder={"Seu bairro"}
            />
            <TextoErro>{errors.neighborhood?.message}</TextoErro>
          </InputContainer>
          <InputContainer>
            <TextLabel htmlFor="city">Cidade*:</TextLabel>
            <Input
              {...register("city", { required: true })}
              type={"string"}
              id={"city"}
              placeholder={"Sua cidade"}
            />
            <TextoErro>{errors.city?.message}</TextoErro>
          </InputContainer>
          <InputContainer>
            <TextLabel htmlFor="state">Estado*:</TextLabel>
            <Input
              {...register("state")}
              type={"string"}
              id={"state"}
              placeholder={"Seu estado"}
            />
            <TextoErro>{errors.state?.message}</TextoErro>
          </InputContainer>
        </StyledForm>
        <StyledDivBotoes>
          <ButtonStyled type="submit">Salvar</ButtonStyled>
          <ButtonStyled type="button" onClick={cancelar}>
            Cancelar
          </ButtonStyled>
        </StyledDivBotoes>
      </form>
    </Paper>
  );
};
