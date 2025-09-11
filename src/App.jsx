import React from 'react';
import "./styles/App.scss";
import Hero from './Components/Hero'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="h-full">
      <Navbar/>
      <Hero />
      <Footer/>
    </div>
  );
}

export default App;
