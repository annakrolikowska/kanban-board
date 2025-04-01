import React from "react";
import { StyledConfirmationDialog } from "../../styles/ColumnContainer/ConfirmationDialog.styled";
import Button from "../Header/Button";

const ConfirmationDialog = ({
  isOpen,
  onConfirm,
  onCancel,
  message,
  type = "default",
}) => {
  return isOpen ? (
    <StyledConfirmationDialog type={type}>
      <h3>{message}</h3>
      <div>
        <Button onClick={onConfirm} type="primary">
          Confirm
        </Button>
        <Button onClick={onCancel} type="transparent">
          Cancel
        </Button>
      </div>
    </StyledConfirmationDialog>
  ) : null;
};

export default ConfirmationDialog;
