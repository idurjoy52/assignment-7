import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import School from './Components/School/School';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <School></School>
    </div>
  );
}

export default App;
