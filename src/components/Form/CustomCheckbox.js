import React from "react";
import { StyledCustomCheckbox } from "../../styles/Form/CustomCheckbox.styled";
import CheckboxItem from "./CheckboxItem";

const THEME_OPTIONS = [
  { id: "orange", value: "orange" },
  { id: "green", value: "green" },
  { id: "blue", value: "blue" },
  { id: "pink", value: "pink" },
];

const CustomCheckbox = ({ onChange }) => {
  return (
    <StyledCustomCheckbox>
      <legend>Color theme</legend>
      <div>
        {THEME_OPTIONS.map(({ id, value }) => (
          <label key={id}>
            <input
              id={id}
              type="radio"
              name="theme"
              value={value}
              onChange={onChange}
            />
            <CheckboxItem theme={value} />
          </label>
        ))}
      </div>
    </StyledCustomCheckbox>
  );
};

export default CustomCheckbox;
