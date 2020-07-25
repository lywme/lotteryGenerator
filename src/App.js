import React from 'react';
import logo from './logo.svg';
import './App.css';
import Lottery from './Lottery'

function App() {
  return (
    <div className="App">
      <Lottery title="lottery" numballs={8} maxnum={40}/>
    </div>
  );
}

export default App;
