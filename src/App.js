import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Header from './Components/Header';
import Skills from './Components/skills';
import About from './Components/About';
import Contact from './Components/Contact';
import SocialMedia from './Components/SocialMedia';

function App() {
  return (
    <div className="App">
      <Header />
      <Skills />
      <About />
      <Contact />
      <SocialMedia />
    </div>
  );
}

export default App;
