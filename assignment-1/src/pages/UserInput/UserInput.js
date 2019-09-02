import React from 'react';

const userInput = (props) => {

    const styleInput = {
        'width': '60%',
        'border': '2px solid blue',
        'padding': '16px',
        'margin': '16px'
    };

    const styleDiv = { 'text-align': 'left'}

    return (
        <div style={styleDiv}>
            <input type='text'
                style={styleInput}
                onChange={props.changed}
                value={props.currentName} />
        </div>
    )
}

export default userInput;