import React from "react";
import { StyledCheckboxItem } from "../../styles/Form/CheckboxItem.styled";

const CheckboxItem = ({ theme, onChange }) => {
  return <StyledCheckboxItem theme={theme} onChange={onChange} />;
};

export default CheckboxItem;
