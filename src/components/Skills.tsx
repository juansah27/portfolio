'use client'

import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, RadialLinearScale } from 'chart.js'
import { Doughnut, PolarArea } from 'react-chartjs-2'

// Register Chart.js components
ChartJS.register(ArcElement, RadialLinearScale, Tooltip, Legend)

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    
    return () => observer.disconnect()
  }, [])
  
  // Consistent color palette
  const colorPalette = {
    primary: [
      'rgba(53, 162, 235, 0.8)',   // Blue
      'rgba(75, 192, 192, 0.8)',   // Teal
      'rgba(102, 126, 234, 0.8)',  // Indigo
      'rgba(232, 121, 249, 0.8)',  // Pink
      'rgba(252, 211, 77, 0.8)',   // Amber
    ],
    borders: [
      'rgba(53, 162, 235, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(102, 126, 234, 1)',
      'rgba(232, 121, 249, 1)',
      'rgba(252, 211, 77, 1)',
    ]
  }
  
  // Data Analysis skills data
  const dataAnalysisData = {
    labels: ['SQL', 'Python', 'Excel', 'Data Visualization', 'Business Intelligence'],
    datasets: [
      {
        label: 'Proficiency Level',
        data: [95, 85, 90, 80, 85],
        backgroundColor: colorPalette.primary,
        borderColor: colorPalette.borders,
        borderWidth: 1,
      },
    ],
  }
  
  // Web Development skills data
  const webDevData = {
    labels: ['HTML/CSS', 'JavaScript', 'React', 'Next.js', 'Flask'],
    datasets: [
      {
        label: 'Proficiency Level',
        data: [85, 80, 75, 70, 85],
        backgroundColor: colorPalette.primary,
        borderWidth: 1,
      },
    ],
  }
  
  // Chart options
  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '65%',
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          padding: 20,
          color: '#e5e7eb',
          font: {
            size: 12,
            family: 'Inter, sans-serif',
          }
        },
      },
      tooltip: {
        backgroundColor: 'rgba(15, 23, 42, 0.9)',
        titleFont: {
          size: 14,
          family: 'Inter, sans-serif',
        },
        bodyFont: {
          size: 13,
          family: 'Inter, sans-serif',
        },
        padding: 12,
        cornerRadius: 8,
        callbacks: {
          label: function(context: any) {
            return `${context.label}: ${context.raw}%`
          }
        }
      }
    },
  }
  
  const polarOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        pointLabels: {
          color: '#e5e7eb',
          font: {
            size: 12,
            family: 'Inter, sans-serif',
          }
        },
        ticks: {
          backdropColor: 'transparent',
          color: '#e5e7eb',
        }
      }
    },
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          padding: 20,
          color: '#e5e7eb',
          font: {
            size: 12,
            family: 'Inter, sans-serif',
          }
        },
      },
      tooltip: {
        backgroundColor: 'rgba(15, 23, 42, 0.9)',
        titleFont: {
          size: 14,
          family: 'Inter, sans-serif',
        },
        bodyFont: {
          size: 13,
          family: 'Inter, sans-serif',
        },
        padding: 12,
        cornerRadius: 8,
        callbacks: {
          label: function(context: any) {
            return `${context.label}: ${context.raw}%`
          }
        }
      }
    },
  }
  
  // Skill cards data
  const skillCards = [
    {
      category: 'Data Analysis',
      skills: ['SQL', 'Python', 'Excel', 'Data Visualization', 'Business Intelligence', 'Statistical Analysis', 'Data Modeling'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      category: 'Web Development',
      skills: ['HTML/CSS', 'JavaScript', 'React', 'Next.js', 'Flask', 'Responsive Design', 'Tailwind CSS'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      category: 'Database & Tools',
      skills: ['SQL Server', 'PostgreSQL', 'MongoDB', 'Git', 'VS Code', 'Jupyter Notebook', 'Power BI', 'Tableau'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
    },
  ]
  
  return (
    <section 
      id="skills" 
      className="py-20 pt-28 md:pt-32 bg-gray-900" 
      ref={sectionRef}
      data-section="skills"
    >
      <div className="section-container">
        <motion.h2 
          className="section-title text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Skills & Technologies
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Data Analysis Skills Chart */}
          <motion.div 
            className="card p-6 bg-gray-800 border border-gray-700"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-center text-white">Data Analysis Skills</h3>
            <div className="h-72">
              <Doughnut data={dataAnalysisData} options={doughnutOptions} />
            </div>
          </motion.div>
          
          {/* Web Development Skills Chart */}
          <motion.div 
            className="card p-6 bg-gray-800 border border-gray-700"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-center text-white">Web Development Skills</h3>
            <div className="h-72">
              <PolarArea data={webDevData} options={polarOptions} />
            </div>
          </motion.div>
        </div>
        
        {/* Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCards.map((card, index) => (
            <motion.div
              key={card.category}
              className="card p-6 bg-gray-800 border border-gray-700 hover:border-primary-500 transition-colors duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
            >
              <div className="flex items-center mb-4">
                {card.icon}
                <h3 className="text-xl font-semibold ml-3 text-white">{card.category}</h3>
              </div>
              <ul className="space-y-2">
                {card.skills.map((skill) => (
                  <li key={skill} className="flex items-center text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills 