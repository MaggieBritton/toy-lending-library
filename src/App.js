import './App.css';
import Hero from './components/Hero';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Hero />
      </div>
    </BrowserRouter>
  );
}

export default App;
