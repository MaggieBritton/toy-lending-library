import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';
import { INVENTORY } from './data/inventory';
import Toys from './components/Toys';
import Contact from './components/Contact';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      inventory: INVENTORY
    }
  }
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route path='/home' render={() => 
              <Home 
                inventoryItems={this.state.inventory.filter(inventoryItems => inventoryItems.featured)} 
              /> }  
            />
            <Route exact path='/toys' render={() => 
              <Toys 
                inventoryItems={this.state.inventory} 
              /> }  
            />
            <Route exact path='/contact' component={Contact} />  
            <Redirect to='/home' />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
    }
}

export default App;
