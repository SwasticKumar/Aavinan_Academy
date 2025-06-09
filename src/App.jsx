// src/App.jsx
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components//footer/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Lazy load page components
const Home = lazy(() => import("./pages/home/Home"));
const About = lazy(() => import("./pages/about/About"));
const Services = lazy(() => import("./pages/services/Services"));
const Learning = lazy(() => import("./pages/learning/Learning"));
const Contact = lazy(() => import("./pages/contact/Contact"));

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <ScrollToTop />

      <Navbar />
      {/* Suspense fallback while components are loading */}
      <Suspense fallback={<div className="text-center my-5">Loading...</div>}>
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </Suspense>

      <Footer />
    </div>
  );
}
