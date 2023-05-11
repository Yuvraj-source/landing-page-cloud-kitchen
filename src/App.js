
import AboutUs from "./Components/AboutUs";
import FeatureComponents from "./Components/Features";
import Footer from "./Components/Footer";
import MicroverseHero from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import NotesFeature from "./Components/NotesFeature";



function App() {
  return (
    <div >
      <Navbar/>
      <MicroverseHero/>
      <FeatureComponents/>
      <AboutUs/>
      <NotesFeature/>
      <Footer/>
    
    </div>
  );
}

export default App;
