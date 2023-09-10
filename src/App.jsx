import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Components/NavBar/Navbar"
import Footer from "./Components/Footer/Footer"
import Hello from "./Routes/Hello";
import AboutMe from "./Routes/AboutMe";
import Projects from "./Routes/Projects";
import ContactMe from "./Routes/ContactMe";

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
