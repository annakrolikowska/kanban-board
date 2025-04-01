import styled, { css } from "styled-components";

const StyledClosedButton = styled.button`
  border: none;
  cursor: pointer;
  background: none;
  color: var(--color-light-grey);

  &:hover {
    color: var(--color-black);
  }

  ${(props) =>
    props.size === "small" &&
    css`
        margin-left: 58px;

        & .icon {
            height: 15px; 
        }
    }`}

  ${(props) =>
    props.size === "large" &&
    css`
        margin-left: 285px;

        & .icon{
            height: 30px;     
        }

        @media (max-width: 800px) {
            margin-left: 245px;
        }
    }`}
`;
export { StyledClosedButton };
