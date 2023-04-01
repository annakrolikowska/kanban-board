
import React from 'react';
import { StyledTask } from '../styles/Task.styled';
import Priority from './Priority';

const Task = props => {
    const {priority, member, size, theme, description, onChange} = props;
    return (
        <StyledTask priority={priority} member={member} description={description} size={size} theme={theme} onChange={onChange}>
            <Priority/>
            <div className="task-details">
                <h2>New tasks</h2>
                <p>It is a long established fact that a reader will be distracted by the readable.</p>
            </div>
            <div className="task-member">
                <img src="https://i.ibb.co/FDpxMKH/avvatar.png" alt="member"/>
                <h2>Team Member</h2>
            </div>
        </StyledTask>
    );
}

export default Task;