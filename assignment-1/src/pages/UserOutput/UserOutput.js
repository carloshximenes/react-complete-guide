import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div class="UserOutput">
            <p>My name is {props.userName}.</p>
            <p>I'm 28 years old.</p>
        </div>
    )
}

export default userOutput;