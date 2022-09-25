import { StyledInput } from "./StyledInput";
import { forwardRef } from "react";

export const Input = forwardRef((props,ref) => (
  
  <StyledInput {...props} ref={ref}></StyledInput>
));

Input.displayName = "Input";