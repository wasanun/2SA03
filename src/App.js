import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';

const word = "Hello";
class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1 className="App-titel">ยินดีต้อนรับ</h1>
        </header>
        <h1 className="App-y">  <WordCard value="SATUN" /></h1>
        <footer>
          <h3 className="App-uy">วสนันท์ ทองนอก 5935512043</h3>
        </footer>
      </div>
    );
  }
}


export default App;
