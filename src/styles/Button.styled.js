import styled, {css} from 'styled-components';

const StyledButton= styled.button`
    padding: 8px 20px;
    min-width: 195px;
    height: 36px;
    font-family: var(--font-primary);
    background: var(--color-accent);
    border-radius: 16px;
    border: none;
    color: var(--color-white);
    font-size: 16px;
    font-weight: 300;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover {
        background:var(--color-accent-hover);
    }

    &:active {
        border: 1px solid black;
    }

    &:focus-visible {
        outline: 2px solid black;
    }

    ${ props => props.type === 'submit' && css`
        min-width: 100%;
        height: 36px;
        font-weight: 400;
        margin-top: 48px;
    }`}

    ${ props => props.type === 'close' && css`
        background: none;
        min-width: 10px;
        margin-left: 280px;

        &:hover {
            background: none;
        }

        & img {
            background: none;
            width: 20px;       
        }
    }`}

    @media (max-width: 1209px) {
        ${ props => props.type === 'openForm' && css`
          min-width: 160px;
        }
    `}}
`
export { StyledButton};