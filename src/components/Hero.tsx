'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return
      
      const scrollY = window.scrollY
      const heroHeight = heroRef.current.offsetHeight
      const opacity = 1 - Math.min(1, scrollY / (heroHeight * 0.8))
      
      heroRef.current.style.opacity = opacity.toString()
      heroRef.current.style.transform = `translateY(${scrollY * 0.4}px)`
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div 
      id="home"
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
      data-section="home"
    >
      {/* Background with CSS-based parallax effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 to-secondary-900 opacity-90"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-10"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="block">Welcome to</span>
            <span className="text-primary-300">Handiyan Juansah's Portfolio</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Data Analyst | Web Developer | Software Engineer
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href="#about"
              className="btn-primary text-lg px-8 py-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              About Me
            </motion.a>
            
            <motion.a
              href="#projects"
              className="btn-outline text-white border-white hover:bg-white hover:bg-opacity-10 text-lg px-8 py-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
          </div>
        </motion.div>
        
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className="flex flex-col items-center">
            <p className="text-gray-300 mb-2">Scroll down</p>
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
              <motion.div
                className="w-1.5 h-1.5 bg-white rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              ></motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero 