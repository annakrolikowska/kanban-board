import styled from "styled-components";

const StyledColumnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: auto;
  padding-top: 28px;

  @media (min-width: 1024px) {
    height: 69vh;
    overflow: scroll;
    padding-right: 15px;
    scrollbar-width: thin;
  }

  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 735px) {
    grid-template-columns: 1fr;
  }
`;
export { StyledColumnContainer };
