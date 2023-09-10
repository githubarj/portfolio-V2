import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Components/NavBar/Navbar"
import Footer from "./Components/Footer/Footer"
import Hello from "./Components/Hello/Hello";
import AboutMe from "./Components/AboutMe/AboutMe";
import Projects from "./Components/Projects/Projects";
import ContactMe from "./Components/ContactMe/ContactMe";

function App() {
  const location = useLocation();

  return (
    <div className="app-container">
      <Navbar />
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Hello />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contactMe" element={<ContactMe />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
