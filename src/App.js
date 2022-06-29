// import logo from './logo.svg';
// import './App.css';
import Nav from './components/Nav';
import Body from './components/Body';
import React from 'react';

class App extends React.Component{
  render(){
  return (
    <div className="App">
      <div>
      <Nav />
      <Body />
      </div>
    </div>
  )
  }
}

export default App;
