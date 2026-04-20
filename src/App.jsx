import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Project";
import Contact from "./pages/Contact";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Navbar always visible */}
      <Navbar />

      <div style={{ display: "flex", flex: 1 }}>
        {/* Sidebar controls page switching */}
        <Sidebar setPage={setPage} />

        {/* Main content area */}
        <div style={{ padding: "20px", width: "100%" }}>
          {page === "home" && <Home setPage={setPage} />}
          {page === "about" && <About />}
          {page === "projects" && <Projects />}
          {page === "contact" && <Contact />}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;