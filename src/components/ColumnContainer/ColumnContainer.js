import React from "react";
import { StyledColumnContainer } from "../../styles/ColumnContainer/ColumContainer.styled";
import Column from "./Column";

const COLUMNS_DATA = [
  { id: 1, title: "to do", limit: 4 },
  { id: 2, title: "in progress", limit: 3 },
  { id: 3, title: "in review", limit: 2 },
  { id: 4, title: "completed", limit: 4 },
];

const ColumnContainer = () => {
  return (
    <StyledColumnContainer>
      {COLUMNS_DATA.map(({ id, title, limit }) => (
        <Column key={id} id={id} columnTitle={title} limit={limit} />
      ))}
    </StyledColumnContainer>
  );
};

export default ColumnContainer;
