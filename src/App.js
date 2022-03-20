import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path='/home' component={Home} />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
