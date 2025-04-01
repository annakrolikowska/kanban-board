import styled from "styled-components";

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: flex-start;
  min-height: 735px;
  width: 200px;

  & h2 {
    font-size: 24px;
    margin-bottom: 4px;
  }

  & p {
    font-weight: 300;
    font-size: 12px;
  }

  @media (max-width: 1024px) {
    min-height: 675px;
    width: auto;
    align-items: center;
    gap: 16px;
  }

  @media (max-width: 735px) {
    min-height: 645px;
    gap: 8px;
  }
`;
export { StyledColumn };
