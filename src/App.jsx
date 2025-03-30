import { useState } from 'react'
import './App.css'
import Navbar from './Pages/Home/Navbar'
import AboutMe from './Pages/Home/AboutMe';
import ContactMe from './Pages/Home/ContactMe';
import Footer from './Pages/Home/Footer';
import HeroSection from './Pages/Home/HeroSection';
import MyPortfolio from './Pages/Home/MyPortfolio';
import MySkills from './Pages/Home/MySkills';
import Testimonial from './Pages/Home/Testimonials';

function App() {

  return (
    <>
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
