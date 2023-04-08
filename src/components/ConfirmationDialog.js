import React from "react";
import { StyledConfirmationDialog } from "../styles/ConfirmationDialog.styled";
import Button from "./Button";

const ConfirmationDialog = props => {

    const {isOpen, onConfirm, onCancel, message } = props

    const handleConfirm = () => {
      onConfirm();
    };
  
    const handleCancel = () => {
      onCancel();
    };
  
    return isOpen ? (
      <StyledConfirmationDialog className="confirmation-dialog">
        <h3>{message}</h3>
        <div>
            <Button onClick={handleConfirm}>Confirm</Button>
            <Button onClick={handleCancel}>Cancel</Button>
        </div>
      </StyledConfirmationDialog>
    ) : null;
  };

export default ConfirmationDialog;