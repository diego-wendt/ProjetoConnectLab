import { StyledCardPaper } from "./StyledCardPaper";
import PropTypes from "prop-types";

export const CardPaper = ({onClick, children }) => {
  return <StyledCardPaper onClick={onClick}>{children}</StyledCardPaper>;
};

CardPaper.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};
