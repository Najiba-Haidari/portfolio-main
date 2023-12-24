import './App.css';
import NavTabs from './components/NavTabs';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume'
import Footer from  './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
    <ScrollToTop />
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
