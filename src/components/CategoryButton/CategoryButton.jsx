import { StyledCategoryButton } from "./StyledCategoryButton";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
export const CategoryButton = ({ children, local, onSelecionar }) => {
  const handleClick = (local) => {
    onSelecionar(local);
  };

  return (
    <StyledCategoryButton
      onClick={() => {
        handleClick(local);
      }}
    >
      {children}
    </StyledCategoryButton>
  );
};

CategoryButton.propTypes = {
  children: PropTypes.node,
};
