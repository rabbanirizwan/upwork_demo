import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import Navbar from './components/Navbar';
import BodyPartThree from './components/BodyPartThree';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BodyPartThree/>
    </div>
  );
}

export default App;
