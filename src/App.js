import logo from './logo.svg';
import './App.css';
import { Top } from './components/Top';
import { NavBar  } from './components/NavBar';
import { Banner  } from './components/Banner';
import { Skills } from './components/Skills';
import { Products } from './components/Products';
import { Contact } from './components/Contact';
import { CopyRight } from './components/CopyRight';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Products />
      <About />
      <Gallery />
      <Contact />
      <CopyRight />
    </div>
  );
}

export default App;
