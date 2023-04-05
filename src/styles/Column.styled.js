import styled from 'styled-components';

const StyledColumn= styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    justify-content: flex-start;
    min-height: 820px;
    width: 200px;

    & h2 {
        font-size: 24px;
        margin-bottom: 4px;
    }

    & p {
        font-weight: 300;
        font-size: 12px;
    }
`
export { StyledColumn};