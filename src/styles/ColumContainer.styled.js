import styled from 'styled-components';

const StyledColumnContainer= styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 1024px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
   }

   @media (max-width: 735px) {
        grid-template-columns: 1fr;
   }
`
export { StyledColumnContainer};