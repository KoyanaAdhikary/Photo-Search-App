import React from 'react';
import './App.scss';
import SearchPhoto from './Components/searchPhoto';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Photo Search App</h1>
        <SearchPhoto />
      </div>
    </div>
  );
}

export default App;
