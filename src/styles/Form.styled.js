import styled from 'styled-components';

const StyledForm = styled.form`

    width: 325px;
    height: 768px;
    border-radius: 20px;
    background: #F8F7F7;
    padding: 45px 25px;
    font-size: 13px;
    position: absolute;
    top: 60px;
    right: 15%;


    & div {
        margin-bottom: 80px;
    }

    & .input, textarea, select {
        width: 100%;
        min-height: 34px;
        border-radius: 16px;
        border: 1px solid #B5B5B5;
        padding: 4px 15px;
        box-sizing: border-box;
        margin: 4px 0 16px;
        font-family: 'Montserrat', sans-serif;
  

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

    & label {
        font-weight: 500;
    }

    
    & select:invalid {
            color: red;
    }

    & .error-message {
        color: red;
        font-size: 12px;
        font-weight: 500;
        margin-left: 110px;
    }

    & .error {
       border: 1px solid red;
    }
`

export { StyledForm };