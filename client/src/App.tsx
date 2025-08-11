import { useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Certificates from "./components/sections/Certificates";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import { Toaster } from "sonner";

function App() {
  useEffect(() => {
    document.title = "Praise Olaoye | Backend Developer";
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-mono">
        <Navbar />
        <main>
          <Toaster position="top-right" richColors />
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Certificates />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
