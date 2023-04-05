import styled, {css} from 'styled-components';

const StyledClosedButton= styled.button`
    border: none;
    cursor: pointer;
    background: none;
    opacity: 60%;

    &:hover {
        opacity: 100%;
    }

    ${ props => props.size === 'small' && css`
        margin-left: 58px;

        & img {
            width: 12px;       
        }
    }`}

    ${ props => props.size === 'large' && css`
        margin-left: 285px;

        & img {
            width: 20px;       
        }
    }`}
`
export {StyledClosedButton};