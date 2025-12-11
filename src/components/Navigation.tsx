import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '../lib/utils'
import { Button } from './ui/Button'
export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  useEffect(() => {
    setIsOpen(false)
  }, [location])
  const navLinks = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Classes',
      path: '/classes',
    },
    {
      name: 'Instructors',
      path: '/instructors',
    },
    {
      name: 'Articles',
      path: '/articles',
    },
    {
      name: 'Contact',
      path: '/contact',
    },
    
  ]
  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-6',
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 rounded-full bg-sage-300 flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-white font-bold text-lg">Y</span>
            </div>
            <span className="text-xl font-display font-bold text-sage-600">
              Yogashram
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-sage-400 relative',
                  location.pathname === link.path
                    ? 'text-sage-600'
                    : 'text-gray-600',
                )}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-sage-300 rounded-full"
                  />
                )}
              </Link>
            ))}
            <Link to="/contact">
              <Button size="sm" variant="primary">
                Join Now
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-sage-600"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: 'auto',
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-8 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'text-lg font-medium py-2',
                    location.pathname === link.path
                      ? 'text-sage-600'
                      : 'text-gray-600',
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" className="w-full">
                <Button className="w-full mt-4">Join Now</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
