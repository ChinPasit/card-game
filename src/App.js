import React, { Component } from 'react';
import './App.css';
import WordCard from './WordCard';
import ChinjungGame from './ChinjungGame';

const word = "Pasitthandamkerng";
const chin = "5910110216"
class App extends Component{
  render(){
    return(
      <div>
        <WordCard value={word}/>
        <ChinjungGame value={chin}/>
      </div>
    );
  }
}
export default App;
