import styled, { css } from "styled-components";

const StyledTask = styled.div`
  width: 200px;
  box-sizing: border-box;
  background-color: var(--color-white);
  color: var(--color-black);
  border-radius: 16px;
  padding: 16px 24px;
  letter-spacing: -0.02em;
  text-align: left;
  border-left: 2px solid var(--color-theme-orange);
  display: grid;
  gap: 8px;
  transition: 0.2s;

  &:hover {
    box-shadow: 6px 6px 10px var(--color-light-grey),
      -4px -4px 10px var(--color-secondary);
  }

  & h2 {
    font-size: 12px;
  }

  & .task-container {
    display: flex;
  }

  & .task-details {
    display: grid;
    gap: 4px;
    min-height: 45px;

    & h2 {
      font-weight: 500;
    }

    & p {
      font-size: 9px;
      line-height: 9.75px;
      font-weight: 300;
      letter-spacing: 0.1px;
    }
  }

  & .task-member {
    display: flex;
    text-align: left;
    align-items: center;

    & img {
      height: 25px;
      width: 25px;
      margin-right: 6px;
    }
  }

  ${(props) =>
    props.theme === "orange" &&
    css`
     border-left: 2px solid var(--color-theme-orange);
  }`}

  ${(props) =>
    props.theme === "green" &&
    css`
     border-left: 2px solid var(--color-theme-green);
  }`}

  ${(props) =>
    props.theme === "blue" &&
    css`
       border-left: 2px solid var(--color-theme-blue);
  }`}

  ${(props) =>
    props.theme === "pink" &&
    css`
     border-left: 2px solid var(--color-theme-pink);
  }`}
`;
export { StyledTask };
