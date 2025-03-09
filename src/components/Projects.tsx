'use client'

import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

type Project = {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  link: string
  github: string
}

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeProject, setActiveProject] = useState<string | null>(null)
  
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
  
  const projects: Project[] = [
    {
      id: 'sql-query-generator',
      title: 'SQL Query Generator',
      description: 'A tool that automates the creation of complex SQL queries, saving time and reducing errors. Built with Python and Flask, it features a user-friendly interface for creating, saving, and exporting queries.',
      image: 'https://via.placeholder.com/600x400',
      tags: ['Python', 'Flask', 'SQL', 'JavaScript', 'Bootstrap'],
      link: 'https://example.com/sql-query-generator',
      github: 'https://github.com/handiyanjuansah/sql-query-generator',
    },
    {
      id: 'product-bundle-manager',
      title: 'Product Bundle Manager',
      description: 'A system for managing product bundles in SQL Server. This application helps businesses create, track, and optimize product bundles with features for inventory management and pricing rules.',
      image: 'https://via.placeholder.com/600x400',
      tags: ['SQL Server', 'C#', '.NET', 'Entity Framework', 'WPF'],
      link: 'https://example.com/product-bundle-manager',
      github: 'https://github.com/handiyanjuansah/product-bundle-manager',
    },
    {
      id: 'modern-portfolio',
      title: 'Modern Web Portfolio',
      description: 'A lightweight, responsive portfolio website built with Next.js and Tailwind CSS. Features include an interactive terminal, AI chatbot, and data visualization components.',
      image: 'https://via.placeholder.com/600x400',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Chart.js'],
      link: 'https://example.com/portfolio',
      github: 'https://github.com/handiyanjuansah/portfolio',
    },
  ]
  
  const handleProjectHover = (id: string) => {
    setActiveProject(id)
  }
  
  const handleProjectLeave = () => {
    setActiveProject(null)
  }
  
  return (
    <section 
      id="projects" 
      className="py-20 pt-28 md:pt-32 bg-gray-50 dark:bg-gray-900" 
      ref={sectionRef}
      data-section="projects"
    >
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Recent Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="card overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => handleProjectHover(project.id)}
              onHoverEnd={handleProjectLeave}
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                  style={{ 
                    transform: activeProject === project.id ? 'scale(1.1)' : 'scale(1)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4 w-full">
                    <h3 className="text-white text-xl font-bold">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span 
                          key={tag} 
                          className="text-xs bg-primary-600/80 text-white px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="text-xs bg-gray-600/80 text-white px-2 py-1 rounded-full">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex justify-between">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-primary text-sm px-4 py-2"
                  >
                    Demo
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-outline text-sm px-4 py-2"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a 
            href="https://github.com/handiyanjuansah" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-secondary inline-flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 