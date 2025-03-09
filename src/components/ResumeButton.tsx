'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface ResumeButtonProps {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const ResumeButton = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '' 
}: ResumeButtonProps) => {
  const [isHovered, setIsHovered] = useState(false)
  
  // Menentukan class berdasarkan variant
  const variantClasses = {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white',
    secondary: 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200',
    outline: 'border border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20'
  }
  
  // Menentukan class berdasarkan size
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  }
  
  return (
    <motion.a
      href="/assets/CV.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center font-medium rounded-md transition-colors duration-300 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Download Resume"
    >
      <span>Resume</span>
      
      <motion.svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-4 w-4 ml-2" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
        animate={{ y: isHovered ? 2 : 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 10 }}
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
        />
      </motion.svg>
    </motion.a>
  )
}

export default ResumeButton 