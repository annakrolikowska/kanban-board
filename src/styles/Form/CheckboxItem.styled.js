import styled, { css } from "styled-components";

const StyledCheckboxItem = styled.span`
  position: absolute;
  margin: 8px 16px 0 0;
  height: 35px;
  width: 35px;
  border-radius: 50%;

  ${(props) =>
    props.theme === "orange" &&
    css`
    background-color: var(--color-theme-orange);
  }`}

  ${(props) =>
    props.theme === "green" &&
    css`
    background-color: var(--color-theme-green);
  }`}

  ${(props) =>
    props.theme === "blue" &&
    css`
      background-color: var(--color-theme-blue);
  }`}

  ${(props) =>
    props.theme === "pink" &&
    css`
    background-color: var(--color-theme-pink);
  }`}
`;
export { StyledCheckboxItem };
