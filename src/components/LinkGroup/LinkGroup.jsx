import { StyledLinkGroup } from "./StyledLinkGroup";
import PropTypes from "prop-types";
import { Anchor } from "../Anchor";

export const LinkGroup = () => {
  return (
    <StyledLinkGroup>
      <Anchor texto={"Início"} endereco={"/home"} />
      <Anchor texto={"Dispositivos"} endereco={"/devices"} />
      <Anchor texto={"Perfil"} endereco={"/perfil"} />
    </StyledLinkGroup>
  );
};

LinkGroup.propTypes = {
  children: PropTypes.node,
};
