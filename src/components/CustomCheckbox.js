
import React from 'react';
import { StyledCustomCheckbox } from '../styles/CustomCheckbox.styled';
import CheckboxItem from './CheckboxItem';

const CustomCheckbox = (props) => {

    const {onChange} = props

    return (
        <StyledCustomCheckbox>
            <legend>Color theme</legend>
            <div >
                <label>
                    <input  id="orange" type="radio" name="theme" onChange={onChange}/>
                      <CheckboxItem theme="orange"/>
                </label>
                <label>
                    <input  id="green" type="radio" name="theme" onChange={onChange}/>
                    <CheckboxItem theme="green"/>
                </label>
                <label>
                    <input  id="blue" type="radio" name="theme" onChange={onChange}/>
                    <CheckboxItem theme="blue"/>
                </label>
                <label>
                    <input  id="pink" type="radio" name="theme" onChange={onChange}/>
                    <CheckboxItem theme="pink"/>
                </label>
          </div>
        </StyledCustomCheckbox>
    );
}

export default CustomCheckbox;