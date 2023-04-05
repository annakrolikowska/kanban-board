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
        line-height: 60px; 

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
`
export { StyledHeader};