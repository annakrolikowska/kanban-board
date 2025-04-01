import React from "react";
import { StyledSelect } from "../../styles/Header/Select.styled";

const Select = ({ onChange, ...restProps }) => (
  <StyledSelect onChange={onChange} {...restProps}>
    {restProps.children}
  </StyledSelect>
);

export default Select;
