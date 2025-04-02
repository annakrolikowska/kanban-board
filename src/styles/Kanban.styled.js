import styled from "styled-components";

const StyledKanban = styled.section`
  background-color: var(--color-primary);
  position: relative;
  height: auto;
  padding: 40px 120px;
  margin: 30px;
  border-radius: 20px;
  box-shadow: 0px 2px 8px rgba(99, 99, 99, 0.2);

  @media (min-width: 1024px) {
    height: 82vh;
  }

  @media (max-width: 800px) {
    margin: 0;
  }

  @media (max-width: 735px) {
    padding: 60px 40px;
  }
`;
export { StyledKanban };
