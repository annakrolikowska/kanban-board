import styled from 'styled-components';

const StyledSelect= styled.select`
    padding: 8px 20px;
    min-width: 195px;
    height: 36px;
    font-family: 'Montserrat', sans-serif;
    background: white;
    border-radius: 16px;
    border: none;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:focus-visible {
        outline: 1px solid #7B54CE;
    }
`
export { StyledSelect};