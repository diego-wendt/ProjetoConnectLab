import { StyledAnchor } from "./StyledAnchor";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Anchor = ({texto, endereco}) => {
  return (
    <StyledAnchor>
      <Link to={endereco}>
          <span>{texto}</span>
        </Link>
    </StyledAnchor>
  );
};

Anchor.propTypes = {
  texto: PropTypes.string,
  endereco: PropTypes.string,
};
