import styled from 'styled-components';

const StyledForm = styled.form`

    width: 325px;
    height: 768px;
    border-radius: 20px;
    background: #F8F7F7;
    padding: 45px 25px;
    position: absolute;
    top: 60px;
    right: 15%;

    & div {
        margin-bottom: 80px;
    }

    & input, textarea, select {
        width: 100%;
        min-height: 34px;
        border-radius: 16px;
        border: 1px solid #B5B5B5;
        padding-left: 5px;
        box-sizing: border-box;
        margin: 4px 0 16px;
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;

        &:focus-visible {
        outline: 1px solid #7B54CE;
        }

        & .placeholder{
            display: none;
        }
    }

    & textarea {
        min-height: 88px;
    }

    & select:invalid {
            color: red;
    }
`

export { StyledForm };