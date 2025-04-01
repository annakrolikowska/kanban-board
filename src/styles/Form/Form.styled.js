import styled from "styled-components";

const StyledForm = styled.form`
  width: 325px;
  height: 635px;
  border-radius: 20px;
  background: var(--color-secondary);
  padding: 45px 25px;
  font-size: 13px;
  position: absolute;
  top: 0;
  right: 0;
  animation: slideInFromRight 0.5s ease-in-out;

  & div {
    margin-bottom: 48px;
  }

  & .input,
  textarea,
  select {
    width: 100%;
    min-height: 36px;
    border-radius: 16px;
    border: 1px solid var(--color-light-grey);
    padding: 4px 15px;
    box-sizing: border-box;
    margin: 4px 0 16px;
    font-family: var(--font-primary);

    &::placeholder {
      color: var(--color-black);
    }

    &:focus-visible {
      outline: 1px solid var(--color-accent);
    }
  }

  & textarea {
    min-height: 88px;
  }

  & label {
    font-weight: 500;
  }

  & select:invalid {
    color: var(--color-error);
  }

  & .error-message {
    color: var(--color-error);
    font-size: 12px;
    font-weight: 500;
    margin-left: 110px;
  }

  & .error {
    border: 1px solid var(--color-error);
  }

  @media (max-width: 800px) {
    transform: translateX(-50%);
    left: 50%;
    max-width: 280px;
    top: 0;
  }

  @keyframes slideInFromRight {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

export { StyledForm };
