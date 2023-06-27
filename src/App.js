
import Home from './Components/Home';
import './App.css';
import About from './Components/About';
import Work from './Components/Work';
import Testimonial from './Components/Testimonials';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import FloatingMenuButton from './Components/FloatingMenu';


function App() {
  return (
    <div className="App">
      <Home/>
          <About/>
      <Work/>
      <FloatingMenuButton/>
      <Testimonial/>
      <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
