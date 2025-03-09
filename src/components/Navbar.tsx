'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ResumeButton from './ResumeButton'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  
  // Daftar navigasi
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]
  
  // Efek scroll untuk mengubah tampilan navbar dan deteksi section aktif
  useEffect(() => {
    const handleScroll = () => {
      // Update navbar style saat scroll
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
      
      // Deteksi section yang aktif dengan pendekatan yang lebih robust
      const sections = navItems.map(item => item.href.substring(1))
      const scrollPosition = window.scrollY + 150 // Offset untuk deteksi section
      
      // Temukan semua section elements dan posisinya
      const sectionPositions = sections.map(section => {
        const element = document.getElementById(section)
        if (!element) return { id: section, top: 0, bottom: 0 }
        
        const rect = element.getBoundingClientRect()
        return {
          id: section,
          top: rect.top + window.scrollY,
          bottom: rect.bottom + window.scrollY
        }
      })
      
      // Urutkan section berdasarkan posisi (dari atas ke bawah)
      sectionPositions.sort((a, b) => a.top - b.top)
      
      // Debug info
      console.log('Scroll position:', scrollPosition)
      console.log('Section positions:', sectionPositions.map(s => `${s.id}: ${s.top}-${s.bottom}`).join(', '))
      
      // Temukan section aktif
      let currentSection = ''
      
      // Jika di bagian paling atas halaman, aktifkan Home
      if (scrollPosition < sectionPositions[1]?.top) {
        currentSection = 'home'
      } else {
        // Cari section yang sesuai dengan posisi scroll
        for (let i = 1; i < sectionPositions.length; i++) {
          if (
            scrollPosition >= sectionPositions[i].top - 200 && // Berikan margin untuk deteksi lebih awal
            (i === sectionPositions.length - 1 || scrollPosition < sectionPositions[i + 1].top - 200)
          ) {
            currentSection = sectionPositions[i].id
            break
          }
        }
      }
      
      // Update active section jika berubah
      if (currentSection && currentSection !== activeSection) {
        console.log('Active section changed to:', currentSection)
        setActiveSection(currentSection)
      }
    }
    
    // Panggil handleScroll sekali untuk inisialisasi
    handleScroll()
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [navItems, activeSection])
  
  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }
  
  // Close mobile menu when clicking a link
  const handleNavClick = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false)
    }
  }
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="text-xl font-bold text-primary-600 dark:text-primary-400">
            Handiyan<span className="text-gray-800 dark:text-white">Juansah</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.href.substring(1)
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
                onClick={handleNavClick}
              >
                {item.name}
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    className="h-0.5 bg-primary-600 dark:bg-primary-400 mt-0.5"
                    layoutId="activeSection"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
            <ResumeButton variant="primary" size="sm" className="ml-2" />
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-2">
              <nav className="flex flex-col space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      activeSection === item.href.substring(1)
                        ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                    onClick={handleNavClick}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="px-3 py-2">
                  <ResumeButton variant="primary" size="sm" className="w-full" />
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar 