import React from "react";
import { StyledPriority } from "../../styles/ColumnContainer/Priority.styled";

const Priority = ({ priority }) => {
  return (
    <StyledPriority priority={priority}>
      <h3>{priority}</h3>
    </StyledPriority>
  );
};

export default Priority;
