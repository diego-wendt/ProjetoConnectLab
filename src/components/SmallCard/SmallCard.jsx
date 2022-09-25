import {
  StyledGroupData,
  StyledPowerButton,
  StyledSmallCard,
} from "./StyledSmallCard";
import PropTypes from "prop-types";
import { CardPaper, Modal, TextoSubTitle, TextoDesc } from "./../../components";
import imagem from "./../../assets/img/product.png";
import { BsPower } from "react-icons/bs";
import { useState } from "react";
import { DevicesDetails } from "../../pages/DevicesDetails";

// eslint-disable-next-line react/prop-types
export const SmallCard = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [dados, setDados] = useState(item);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  const produto = dados.device.name;
  const ligado = dados.is_on;
  const imagemURL = dados.device.photoUrl;
  const comodo = dados.room;
  const local = dados.local.description;

  return (
    <>
      <Modal open={isOpen}>
        <DevicesDetails
          item={dados}
          onClose={() => {
            handleClose();
          }}
        />
      </Modal>
      <CardPaper>
        <StyledSmallCard>
          <img src={imagemURL} alt="produto" width="80px" />

          <StyledGroupData>
            <TextoSubTitle>{produto}</TextoSubTitle>
            <TextoDesc>
              {local} | {comodo} | {ligado ? "ON" : "OFF"}
            </TextoDesc>
          </StyledGroupData>
          
          <StyledPowerButton
            isOn={ligado}
            onClick={() => {
              handleOpen();
            }}
          >
            <BsPower />
          </StyledPowerButton>
        </StyledSmallCard>
      </CardPaper>
    </>
  );
};

SmallCard.propTypes = {
  children: PropTypes.node,
};
