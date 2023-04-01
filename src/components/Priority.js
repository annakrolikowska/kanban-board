
import React from 'react';
import { StyledPriority } from '../styles/Priority.styled';

const Priority = props => {
    const {priority} = props;
    return (
        <StyledPriority priority={priority}>
          <h3>High priority</h3>
        </StyledPriority>
    );
}

export default Priority;