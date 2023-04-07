import styled, {css} from 'styled-components';

const StyledTask = styled.div`
    width: 200px;
    box-sizing:border-box;
    background-color: white;
    color: black;
    border-radius: 16px;
    padding: 16px 24px;
    letter-spacing: -0.02em;
    text-align: left;
    border-left: 2px solid orange;
    display: grid;
    gap: 8px;

    & h2 {
        font-size: 12px;
    }

    & .task-container { 
        display: flex;
    }

    & .task-details { 
        display: grid;
        gap: 4px;
        min-height: 45px;

        & h2 {
        font-weight: 500;
        }

        & p {
        font-size: 9px;
        line-height: 9.75px;
        font-weight: 300;
        letter-spacing: 0.1px;
        }
    }

    & .task-member {
        display: flex;
        text-align: left; 
        align-items: center;
        
        & img {
            height: 25px;
            width: 25px;
            margin-right: 6px;;
        }  
    }

    ${ props => props.theme === 'orange' && css`
     border-left: 2px solid #FCB36E;
  }`}

  ${ props => props.theme === 'green' && css`
     border-left: 2px solid #5CB16D;
  }`}

  ${ props => props.theme === 'blue' && css`
       border-left: 2px solid #5E8AF1;
  }`}

  ${ props => props.theme === 'pink' && css`
     border-left: 2px solid #EF7DCF;
  }`}
`
export { StyledTask };