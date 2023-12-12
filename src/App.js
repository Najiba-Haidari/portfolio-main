import './App.css';
import NavTabs from './components/NavTabs';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume'
import Footer from  './components/Footer';

function App() {
  return (
    <div className="App">
    <NavTabs />
    <About />
    <Portfolio />
    <Resume />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
