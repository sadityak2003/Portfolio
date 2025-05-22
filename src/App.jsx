import './App.css'
import Navbar from './Pages/Navbar/Navbar';
import AboutMe from './Pages/AboutMe/AboutMe';
import ContactMe from './Pages/ContactMe/ContactMe';
import Footer from './Pages/Footer/Footer';
import HeroSection from './Pages/HeroSection/HeroSection';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import MySkills from './Pages/MySkills/MySkills';
import Testimonial from './Pages/Testimonials/Testimonials';
import CustomCursor from './components/CustomCursor';

function App() {

  return (
    <>
    <CustomCursor />
    <Navbar />
    <HeroSection />
    <MySkills />
    <AboutMe />
    <MyPortfolio />
    <Testimonial />
    <ContactMe />
    <Footer />
  </>
  );
}

export default App
