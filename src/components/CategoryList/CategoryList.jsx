import { StyledCategoryList } from "./StyledCategoryList";
import PropTypes from "prop-types";

export const CategoryList = ({ children }) => {
  return (
    
      <StyledCategoryList>{children}</StyledCategoryList>
    
  );
};

CategoryList.propTypes = {
  children: PropTypes.node,
};
