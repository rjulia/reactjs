
//Dependencias
import React, { Component } from 'react';

//components
import Header from './global/Header'
import Content from './global/Content'
import Footer from './global/Footer'

//data
import items from '../data/menu'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Practica" items={items}/>
        <Content/>
        <Footer/>
      </div>
    );
  }
}

export default App;