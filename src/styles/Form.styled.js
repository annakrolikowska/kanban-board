import styled from 'styled-components';

const StyledForm = styled.form`

    width: 325px;
    height: 768px;
    border-radius: 20px;
    background: var(--color-secondary);
    padding: 45px 25px;
    font-size: 13px;
    position: absolute;
    top: 60px;
    right: 75px;
    transform: translateX(-50%);


    & div {
        margin-bottom: 80px;
    }

    & .input, textarea, select {
        width: 100%;
        min-height: 34px;
        border-radius: 16px;
        border: 1px solid var(--color-light-grey);
        padding: 4px 15px;
        box-sizing: border-box;
        margin: 4px 0 16px;
        font-family: var(--font-primary);

        &:focus-visible {
            outline: 1px solid var(--color-accent);
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
            color: var(--color-error);
    }

    & .error-message {
        color: var(--color-error);
        font-size: 12px;
        font-weight: 500;
        margin-left: 110px;
    }

    & .error {
       border: 1px solid var(--color-error);
    }

    @media (max-width: 1850px) {
        right: -60px;
    }

    @media (max-width: 1550px) {
        right: -128px;
    }

    @media (max-width: 1309px) {
        right: -149px;
    }

   @media (max-width: 800px) {
        left: 50%;
        max-width: 280px;
   }
`

export { StyledForm };