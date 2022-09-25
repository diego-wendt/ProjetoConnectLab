import { StyledPaper } from "./StyledPaper";
import PropTypes from "prop-types";

export const Paper = ({ children }) => {
  return <StyledPaper>{children}</StyledPaper>;
};

Paper.propTypes = {
  children: PropTypes.node,
};
