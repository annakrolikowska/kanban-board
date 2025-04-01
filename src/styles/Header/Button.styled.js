import styled, { css } from "styled-components";

const StyledButton = styled.button`
  padding: 8px 20px;
  min-width: 195px;
  height: 36px;
  font-family: var(--font-primary);
  background: var(--color-accent);
  border-radius: 16px;
  border: none;
  color: var(--color-white);
  font-size: 16px;
  font-weight: 300;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background: var(--color-accent-hover);
  }

  &:active {
    border: 1px solid black;
  }

  &:focus-visible {
    outline: 2px solid black;
  }

  ${(props) =>
    props.type === "transparent" &&
    css`
      background: transparent;
      border: 2px solid var(--color-accent);
      color: var(--color-accent);

      &:hover {
        color: var(--color-white);
      }
    `}

  ${(props) =>
    props.type === "submit" &&
    css`
        min-width: 100%;
        height: 40px;
        font-weight: 400;
        margin-top: 48px;
    }`}

    @media (max-width: 1209px) {
    ${(props) =>
      props.type === "openForm" &&
      css`
          min-width: 160px;
        }
    `}
  }
`;
export { StyledButton };
