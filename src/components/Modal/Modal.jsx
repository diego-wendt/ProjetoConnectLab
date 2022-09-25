import PropTypes from "prop-types";
import React from "react";
import ReactDOM from "react-dom";
import { StyledModal, StyledOverlay } from "./StyledModal";

// eslint-disable-next-line react/prop-types
export const Modal = ({ open, children, onClose }) => {
  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <StyledOverlay>
        <StyledModal>
        {children}
        </StyledModal>
      </StyledOverlay>
    </>,
    document.getElementById("portal"),
  );
};

Modal.propTypes = {
  children: PropTypes.node,
};
