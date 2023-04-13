import React from 'react';
import { StyledClosedButton } from '../../styles/ClosedButton.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'


const ClosedButton = props => {
    const {onClick, size} = props
    
    return (
        <StyledClosedButton size={size} onClick={onClick}>
              <FontAwesomeIcon className='icon' icon={faXmark} />
        </StyledClosedButton>
    );
}

export default ClosedButton;