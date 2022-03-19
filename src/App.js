import './App.css';
import Hero from './components/Hero';
import Header from './components/Header';
import WhatIs from './components/WhatIs';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Hero />
        <WhatIs />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
