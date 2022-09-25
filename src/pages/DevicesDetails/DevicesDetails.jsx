import {
  StyledDevicesDetails,
  StyledDiv,
  StyledDivDetails,
  StyledDivLine,
  StyledDivLineButton,
  StyledHr,
  StyledPowerButton,
  StyledTexto1,
  StyledTexto2,
  StyledTexto3,
} from "./StyledDevicesDetails";
import { ButtonStyled, CardPaper, TextTitle } from "./../../components";
import PropTypes from "prop-types";
import { BsPower } from "react-icons/bs";
import {  useState } from "react";
import {toast} from "react-toastify"
import {
  DeleteDevice,
  StoreDeviceId,
  UpdateDevice,
} from "../../service";

// eslint-disable-next-line react/prop-types
export const DevicesDetails = ({ onClose, item }) => {
  const produto = item;

  const [data, setData] = useState(produto.is_on);

  const ligar = async () => {
    try {
      StoreDeviceId(produto._id);
      await UpdateDevice(!data, produto._id);
      setData(!data);
      toast.success(`O dispositivo foi ${data? "ligado":"desligado"} com sucesso.`)
    } catch (error) {
      toast.error("Erro ao comandar dispositivo.")
    }
  };

  const handleExcluir = async () => {
    try {
      await DeleteDevice(produto._id);
      toast.success("Dispositivo removido com sucesso.")
      onClose();
    } catch (error) {
      toast.error("Erro ao remover dispositivo.")
    }
  };

  const info = produto.device.info;

  return (
    <CardPaper>
      <StyledDevicesDetails>
        <StyledDiv>
          <TextTitle>{produto.device.name}</TextTitle>
          <StyledTexto1>{produto.device.type}</StyledTexto1>
          <StyledTexto1>{produto.device.madeBy}</StyledTexto1>
        </StyledDiv>
        <img src={produto.device.photoUrl} alt="" width="80px" />
        <StyledDivLineButton>
          <StyledTexto2>
            Dispositivo {data ? "ligado" : "desligado"}
          </StyledTexto2>
          <StyledPowerButton onClick={ligar} isOn={data}>
            <BsPower />
          </StyledPowerButton>
        </StyledDivLineButton>

        <StyledDivDetails>
          <StyledTexto3>Informações do dispositivo</StyledTexto3>
          <StyledHr />
          <StyledDivLine>
            <StyledTexto2>ID virtual: </StyledTexto2>
            <StyledTexto1>{info.virtual_id}</StyledTexto1>
          </StyledDivLine>
          <StyledDivLine>
            <StyledTexto2>Endereço IP: </StyledTexto2>
            <StyledTexto1>{info.ip_address}</StyledTexto1>
          </StyledDivLine>
          <StyledDivLine>
            <StyledTexto2>Endereço MAC: </StyledTexto2>
            <StyledTexto1>{info.mac_address}</StyledTexto1>
          </StyledDivLine>
          <StyledDivLine>
            <StyledTexto2>Fuso horário: </StyledTexto2>
            <StyledTexto1>América/Sao_Paulo</StyledTexto1>
          </StyledDivLine>
          <StyledDivLine>
            <StyledTexto2>Força do sinal: </StyledTexto2>
            <StyledTexto1>{info.signal}</StyledTexto1>
          </StyledDivLine>
        </StyledDivDetails>
        <StyledDivLine>
          <ButtonStyled onClick={handleExcluir}>REMOVER</ButtonStyled>
          <ButtonStyled onClick={onClose}>FECHAR</ButtonStyled>
        </StyledDivLine>
      </StyledDevicesDetails>
    </CardPaper>
  );
};

// DevicesDetails.propTypes = {
//     children: PropTypes.node,
//   };
