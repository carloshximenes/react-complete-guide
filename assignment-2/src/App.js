import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './pages/ValidationComponent/ValidationComponent';
import CharComponent from './pages/CharComponent/CharComponent';

class App extends Component {
  state = { texto: '' };

  inputChangedHandler = (event) => {
    this.setState({ texto: event.target.value })
  }

  deleteCharHandler = (index) => {
    const arrayTexto = [...this.state.texto];
    arrayTexto.splice(index, 1);
    const updatedTexto = arrayTexto.join('');
    this.setState({ texto: updatedTexto });
  }

  render() {
    const { texto } = this.state;

    return (
      <div className="App">
        <input type="text" onChange={this.inputChangedHandler} value={texto}/>
        <p>O texto acima possui {texto.length} caractere(s).</p>
        <ValidationComponent tamanho={texto.length} />
        {
          texto.split('').map((character, index) => {
            return <CharComponent char={character} clicked={() => this.deleteCharHandler(index)} key={index} />
          })
        }
      </div>
    );
  }
}

export default App;
