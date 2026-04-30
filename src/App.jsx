import { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

import Nav from './components/Nav';
import NavOverlay from './components/NavOverlay';
import Footer from './components/Footer';

import Home from './pages/Home';
import Services from './pages/Services';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  const [navOpen, setNavOpen] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const cursorRef = useRef(null);

  // Scroll listener for nav state
  useEffect(() => {
    const onScroll = () => {
      setNavScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when nav is open
  useEffect(() => {
    if (navOpen) {
      document.body.classList.add('nav-open');
    } else {
      document.body.classList.remove('nav-open');
    }
    return () => document.body.classList.remove('nav-open');
  }, [navOpen]);

  // Custom cursor tracking
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;
    const move = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top  = e.clientY + 'px';
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  // Close nav on route change
  const location = useLocation();
  useEffect(() => {
    setNavOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Global visual overlays */}
      <div className="scanlines" aria-hidden="true" />
      <div className="noise"     aria-hidden="true" />
      <div className="cursor"    aria-hidden="true" ref={cursorRef} />

      <Nav
        scrolled={navScrolled}
        onOpenMenu={() => setNavOpen(true)}
      />

      {navOpen && (
        <NavOverlay onClose={() => setNavOpen(false)} />
      )}

      <main>
        <Routes>
          <Route path="/"         element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work"     element={<Work />} />
          <Route path="/about"    element={<About />} />
          <Route path="/contact"  element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  );
}
