import styled from 'styled-components';

const StyledKanban= styled.section`
    background-color: var(--color-primary);
    position: relative;
    height: auto;
    padding: 60px 120px;
    margin: 60px;
    border-radius: 20px;
    box-shadow: 0px 2px 8px rgba(99, 99, 99, 0.2);

    @media (max-width: 1309px) {
        padding: 60px;
    }

    @media (max-width: 1209px) {
       margin: 40px;
   }

   @media (max-width: 800px) {
        margin: 0;
   }

   @media (max-width: 735px) {
        padding: 60px 40px;
   }
`
export { StyledKanban};