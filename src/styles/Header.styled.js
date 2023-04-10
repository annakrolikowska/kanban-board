import styled from 'styled-components';

const StyledHeader= styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:space-between;
    margin-bottom: 48px;

    & h1 {
        font-weight: 500;
        font-size: 48px;

        & span {
            color: #7B54CE
        }
    }

    & .header-container {
        display: flex;
        justify-content: space-between;
        gap: 2%;
        margin-right: 15px;
    }

    @media (max-width: 1024px) {
       flex-direction: column;
       align-items: normal;
       gap: 48px;
       padding: 0 8.5%;
   }

   @media (max-width: 735px) {
        padding: 0;

        & h1 {
            font-size: 36px;
            text-align: center;
        }

        & .header-container {
            flex-direction: column;
            gap: 20px;
        }
   }
`
export { StyledHeader};