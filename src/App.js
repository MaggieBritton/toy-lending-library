import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';
import { INVENTORY } from './data/inventory';
import Toys from './components/Toys';
import ToyInfo from './components/ToyInfo';
import Contact from './components/Contact';
import About from './components/About';
import SignUp from './components/SignUp';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      inventory: INVENTORY
    }
  }
  
  render() {

    const ToyWithId = ({match}) => {
      return (
        <ToyInfo 
          toy={this.props.inventory.filter(toy => toy.id === +match.params.toyId[0])}
        />
      )
    }

    return (
      <BrowserRouter>
        <ScrollToTop>
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
              <Route path='/toys/:toyId' component={ToyWithId} />
              <Route exact path='/about' component={About} />
              <Route exact path='/signup' component={SignUp} />
              <Route exact path='/contact' component={Contact} />  
              <Redirect to='/home' />
            </Switch>
            <Footer />
          </div>
        </ScrollToTop>
      </BrowserRouter>
    );
    }
}

export default App;
