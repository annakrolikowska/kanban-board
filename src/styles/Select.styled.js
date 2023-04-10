import styled from 'styled-components';

const StyledSelect= styled.select`
    padding: 8px 20px;
    min-width: 195px;
    height: 36px;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    background: white;
    border-radius: 16px;
    border: none;
    text-align: center;
    cursor: pointer;
    background: url("https://cdn-icons-png.flaticon.com/512/9068/9068059.png") 20px center / 16px no-repeat white;

    &:focus-visible {
        outline: 1px solid #7B54CE;
    } 

    @media (max-width: 1209px) {
       min-width: 160px;
   }
`
export { StyledSelect};