import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PageLoader from './components/PageLoader'
import Home from './pages/Home'
import Blog from './pages/Blog'

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <AnimatePresence>
        {loading && <PageLoader onComplete={() => setLoading(false)} key="loader" />}
      </AnimatePresence>

      {!loading && (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <main style={{ flex: 1, paddingTop: '80px' }}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </main>
          <Footer />
        </div>
      )}
    </>
  )
}

export default App
