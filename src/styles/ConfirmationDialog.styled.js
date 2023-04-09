import styled, {css} from 'styled-components';

const StyledConfirmationDialog = styled.div`
    position: fixed;
    top: 300px;
    width: 550px;
    height: 225px;
    box-sizing:border-box;
    background-color:WHITE;
    color: black;  
    border-radius: 20px;
    padding: 60px 24px;
    letter-spacing: -0.02em;
    text-align: center;
    box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px;
    left: 50%;
    transform: translateX(-50%);
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & h3 {
        font-size: 24px;
        margin-bottom: 50px;
    }


    & div {
        display: flex;
        justify-content: space-around;
    }

    ${ props => props.type === 'limit-info' && css`

        & div {

            & button:first-child {
               display: none;
            }
        }
    }`}
`
export { StyledConfirmationDialog };