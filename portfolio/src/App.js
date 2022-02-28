import Nav from './components/nav/Nav';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Works from './components/works/Works';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu';
import './App.scss';
import { useState } from 'react';

function App() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  return (
    <div className="app">
      <Nav hamburgerOpen={hamburgerOpen} setHamburgerOpen={setHamburgerOpen} />
      <Menu hamburgerOpen={hamburgerOpen} setHamburgerOpen={setHamburgerOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <About />
        <Footer />
      </div>
    </div>
  );
}

export default App;
