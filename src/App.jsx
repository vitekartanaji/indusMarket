import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Instrument from "./components/Instrument";
import Tools from "./components/Tools";
import Company from "./components/Company";
import Education from "./components/Education";
import Footer from "./components/Footer";
import IntroducingBroker from "./components/IntroducingBroker";

function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/instrument" element={<Instrument />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/introducing-broker" element={<IntroducingBroker/>} />
          <Route path="/contact-us" element={<Company />} />
          <Route path="/education" element={<Education />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
