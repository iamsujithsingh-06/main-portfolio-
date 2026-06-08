import React from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import BackToTop from './components/BackToTop';

// Section components
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';

function MainApp() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div
      className={`min-h-screen relative theme-transition-all overflow-x-hidden ${
        isDark ? 'bg-bg-dark text-text-primary' : 'bg-bg-dark text-text-primary'
      }`}
    >
      {/* 1. Initial Page Loading Overlay */}
      <LoadingScreen />

      {/* 2. Navigation Header */}
      <Navbar />

      {/* 3. Main Sections Layout */}
      <main className="relative z-10">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      {/* 4. Footer Links & Bio */}
      <Footer />

      {/* 5. Back to Top Arrow */}
      <BackToTop />
    </div>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}

export default App;
