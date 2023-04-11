import styled from 'styled-components';

const StyledCustomCheckbox= styled.fieldset`

    border: none;
    margin-top: 35px;

    & input {
        display: none; 
    
        &:checked ~ span {
            border: 1px solid var(--color-black);
            box-sizing: border-box;
        }
    }

    & div {
        display: flex;
        width: 100%;
        height: 100%;
        margin-top: 1px;
    }

   & label {
        position: relative;
        height: 35px;
        width: 35px;
        margin-right: 20px;
        cursor: pointer;
        font-size: 22px;
    }

    & legend {
        font-weight: 500;
    }
`
export {StyledCustomCheckbox};