import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/HeroSection';
import DesignIdeas from './components/Pages/DesignIdeas';
import Magazine from './components/Pages/Magazine';
import Cities from './components/Pages/Cities';
import Portfolio from './components/Pages/Portfolio';
import ConsultationPage from './components/Pages/ConsultationPage';
import PricingCalculator from './components/Home/PricingCalculator';
import MultiStepEstimate from './components/Home//MultiStepEstimate';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
// import ScrollToTop from './components/Home/ScrollToTop';
import './styles/globals.css';
import './styles/components.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// ScrollToTop Component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
};

// 404 Not Found Component
const NotFound = () => {
  return (
    <div className="container py-5 text-center">
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <a href="/" className="btn btn-prime">Go Home</a>
    </div>
  );
};

function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/design-ideas" element={<DesignIdeas />} />
          <Route path="/magazine" element={<Magazine />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/consultation" element={<ConsultationPage />} />
          <Route path="/pricing-calculator" element={<PricingCalculator />} />
          <Route path="/get-estimate" element={<MultiStepEstimate />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          {/* <ScrollToTop /> */}
        </Routes>
      </Layout>
    </>
  );
}

export default App;