import "./App.css";
import Charging from "./Components/Charging";
import FeaturedImg from "./Components/FeaturedImg";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import NoiseCancellation from "./Components/NoiseCancellation";
import Quality from "./Components/Quality";
import Specifications from "./Components/Specifications";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  duration: 1500,
});

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <FeaturedImg/>
      <Quality/>
      <NoiseCancellation/>
      <Specifications/>
      <Charging/>
      <Footer/>
    </>
  );
}

export default App;
