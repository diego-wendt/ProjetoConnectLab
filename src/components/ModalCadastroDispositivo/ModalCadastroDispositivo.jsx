import {
  StyledDivButtons,
  StyledModalCadastroDispositivo,
  StyledOption,
  StyledSelect,
} from "./StyledModalCadastroDispositivo";
import PropTypes from "prop-types";
import { Paper } from "../Papers";
import {
  TextTitle,
  ButtonStyled,
  InputContainer,
  Input,
  TextLabel,
} from "../../components";
import { AddDevice, GetLocals, GetLoggedUserId } from "../../service";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

// eslint-disable-next-line react/prop-types
export const ModalCadastroDispositivo = ({  children,  onClose,  device: { _id } }) => {
  const [locals, setLocals] = useState([]);
  const [local, setLocal] = useState(null);
  const [comodo, setComodo] = useState(null);

  useEffect(() => {
    loadDevices();
  }, []);

  const loadDevices = async () => {
    try {
      const { data } = await GetLocals();
      setLocals(data);
    } catch (error) {
      toast.error("Erro ao buscar locais disponíveis.");
    }
  };

  const handleAdicionar = async () => {
    if (!local) {
      toast.error("Local inválido");
    }
    if (!comodo) {
      toast.error("Cômodo inválido");
      return
    }

    const newDevice = {
      user: GetLoggedUserId(),
      device: _id,
      is_on: false,
      local,
      room: comodo,
    };

    try {
      await AddDevice(newDevice);
      toast.success("Dispotivo cadastrado com sucesso.");
      onClose();
    } catch (error) {
      toast.error("Erro ao cadastrar dispositivo.");
    }
  };

  return (
    <Paper>
      <StyledModalCadastroDispositivo>
        <TextTitle>Meu Perfil</TextTitle>

        <InputContainer>
          <TextLabel htmlFor="Local">Local:</TextLabel>

          <StyledSelect
            onChange={(e) => setLocal(e.target.value)}
            name="locais"
            id="locais"
          >
            <StyledOption>Selecione um local</StyledOption>
            {locals.map((local) => (
              <StyledOption key={local._id} value={local._id}>
                {local.description}
              </StyledOption>
            ))}
          </StyledSelect>
        </InputContainer>

        <InputContainer>
          <TextLabel htmlFor="Comodo">Cômodo:</TextLabel>
          <Input
            type="text"
            placeholder={"Digite o nome do cômodo"}
            value={comodo}
            onChange={(e) => setComodo(e.target.value)}
          />
        </InputContainer>

        <StyledDivButtons>
          <ButtonStyled onClick={onClose}>Cancelar</ButtonStyled>
          <ButtonStyled onClick={handleAdicionar}>Confirmar</ButtonStyled>
        </StyledDivButtons>
      </StyledModalCadastroDispositivo>
    </Paper>
  );
};

ModalCadastroDispositivo.propTypes = {
  children: PropTypes.node,
};
