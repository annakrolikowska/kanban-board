import styled, {css} from 'styled-components';

const StyledPriority= styled.div`

    background-color: #FFACAC;
    padding: 5px 0 4px;
    width: 77px;
    height: 18px;
    box-sizing: border-box;
    border-radius: 5px;
    text-align: center;
    font-weight: 400;

    ${ props => props.priority === 'High' && css`
        background-color: #FFACAC;
    }`}

    ${ props => props.priority === 'Medium' && css`
            background-color: #FFE3AC;
    }`}

    ${ props => props.priority === 'Low' && css`
            background-color: #BFFBD3;
    }`}

    & h3 {
        font-size: 8px;
    }
`
export { StyledPriority};