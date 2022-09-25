import { StyledDeviceCard, StyledTitle } from "./StyledDeviceCard";
import PropTypes from "prop-types";
import { CardPaper } from "../Papers";
import {
  ButtonStyled,
  Modal,
  ModalCadastroDispositivo,
  TextoSubTitle
} from "../../components";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const DeviceCard = ({ children, item }) => {
  const produto = item;

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Modal open={isOpen}>
        <ModalCadastroDispositivo device={produto} onClose={handleClose} />
      </Modal>
      <CardPaper>
        <StyledDeviceCard>
          <img src={produto.photoUrl} alt="" width="80px" />
          <TextoSubTitle fontSize={"20px"}>{produto.name}</TextoSubTitle>
          <ButtonStyled
            onClick={() => {
              setIsOpen(true);
            }}
          >
            Adicionar
          </ButtonStyled>
        </StyledDeviceCard>
      </CardPaper>
    </>
  );
};

DeviceCard.propTypes = {
  children: PropTypes.node,
};
