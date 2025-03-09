'use client'

import { motion } from 'framer-motion'

interface ResumeButtonProps {
  className?: string
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  showIcon?: boolean
}

const ResumeButton = ({ 
  className = '', 
  variant = 'primary', 
  size = 'md',
  showIcon = true
}: ResumeButtonProps) => {
  
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-primary-600 hover:bg-primary-700 text-white'
      case 'secondary':
        return 'bg-secondary-600 hover:bg-secondary-700 text-white'
      case 'outline':
        return 'bg-transparent border border-primary-600 text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/10'
      default:
        return 'bg-primary-600 hover:bg-primary-700 text-white'
    }
  }
  
  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'text-sm px-3 py-1.5'
      case 'md':
        return 'text-base px-4 py-2'
      case 'lg':
        return 'text-lg px-6 py-3'
      default:
        return 'text-base px-4 py-2'
    }
  }
  
  return (
    <motion.a
      href="/assets/CV.pdf"
      download="Handiyan_Juansah_CV.pdf"
      className={`inline-flex items-center justify-center font-medium rounded-md transition-colors duration-300 ${getVariantClasses()} ${getSizeClasses()} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      target="_blank"
      rel="noopener noreferrer"
    >
      {showIcon && (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 mr-2" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
          />
        </svg>
      )}
      Download CV
    </motion.a>
  )
}

export default ResumeButton 