import React from 'react';
import './App.css';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>LOGO</h3>
        <ul>
          <li>Link1</li>
          <li>Link2</li>
          <li>Link3</li>
          <li>Link4</li>
        </ul>
      </header>
      <Content/>
    </div>
  );
}

export default App;
