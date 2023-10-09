import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Hello from "./Components/Hello/Hello";
import AboutMe from "./Components/AboutMe/AboutMe";
import Projects from "./Components/Projects/Projects";
import ContactMe from "./Components/ContactMe/ContactMe";
import ScrollToTop from "./Components/Utility/ScrollToTop.jsx";
import AppLayout from "./Components/Layouts/AppLayout";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<AppLayout />} path="/">
        <Route index element={<Hello />} />
        <Route path="aboutMe" element={<AboutMe />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contactMe" element={<ContactMe />} />
      </Route>
    )
  );
  return (
    <RouterProvider router={routes}>
      <ScrollToTop />
    </RouterProvider>
  );
}

export default App;
