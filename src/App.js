import React, { Component } from 'react';
import Header from './components/header'
import CartItems from './components/cartitems'
import Footer from './components/footer'


class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <CartItems/>
      <Footer/>
      </div>
    );
  }
}

export default App;
