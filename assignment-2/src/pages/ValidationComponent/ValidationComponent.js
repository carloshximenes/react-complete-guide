import React from 'react';

const ValidationComponent = (props) => {
    const textoTamanho = (props.tamanho < 5) ? "Text too short" : "Text long enough";
    return (
        <p>{textoTamanho}</p>
    );
}

export default ValidationComponent;