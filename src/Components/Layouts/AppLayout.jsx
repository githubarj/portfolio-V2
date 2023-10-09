import { Outlet } from "react-router-dom";
import "../../App.css";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
function AppLayout() {
  return (
    <div className="app-container">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
