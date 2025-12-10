import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Classes } from './pages/Classes';
import { Instructors } from './pages/Instructors';
import { Contact } from './pages/Contact';
import { Articles } from './pages/Articles';
function ScrollToTop() {
  const {
    pathname
  } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
export function App() {
  return <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-white">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/instructors" element={<Instructors />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/articles" element={<Articles />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>;
}