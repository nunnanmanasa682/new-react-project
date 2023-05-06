import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./protofolia/Pages/Home";
import Project from "./protofolia/Pages/Project";
import Experience from "./protofolia/Pages/Experience";
import Navbar from "./protofolia/Components/Navbar";
import Footer from "./protofolia/Components/Footer";
import ProjectDisplay from "./protofolia/Pages/ProjectDisplay";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;