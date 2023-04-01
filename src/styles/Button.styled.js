import styled from 'styled-components';

const StyledButton= styled.button`
    padding: 8px 20px;
    min-width: 195px;
    height: 36px;
    font-family: 'Montserrat', sans-serif;

    background: #7B54CE;
    border-radius: 16px;
    border: none;
    color: white;
    font-size: 16px;
    font-weight: 300;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover {
        background: #9576D8;
    }

    &:active {
        border: 1px solid black;
    }

    &:focus-visible {
        outline: 2px solid black;
    }
`
export { StyledButton};