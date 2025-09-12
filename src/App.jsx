import About from './Components/About';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Home from './Components/Home';
import MenuComponent from './Components/Menu';
import Navbar from './Components/Navbar';

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Home />
      <MenuComponent />
      <Footer />
    </div>
  );
}