import { StyledButton } from "./StyledButton";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
export const ButtonStyled = ({ children, onClick }) => {
  return (
    // <div>
    <StyledButton onClick={onClick}>{children}</StyledButton>
    // </div>
  );
};

ButtonStyled.propTypes = {
  children: PropTypes.node,
};
