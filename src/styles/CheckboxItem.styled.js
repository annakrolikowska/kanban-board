import styled, {css} from 'styled-components';

const StyledCheckboxItem= styled.span`

  position: absolute;
  margin: 8px 16px 0 0;
  height: 35px;
  width: 35px;
  background-color: #eee;
  border-radius: 50%;
    
  ${ props => props.theme === 'orange' && css`
    background-color: #FCB36E;
  }`}

  ${ props => props.theme === 'green' && css`
    background-color: #5CB16D;
  }`}

  ${ props => props.theme === 'blue' && css`
      background-color: #5E8AF1;
  }`}

  ${ props => props.theme === 'pink' && css`
    background-color: #EF7DCF;
  }`}
`
export {StyledCheckboxItem};