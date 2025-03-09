'use client'

import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const About = () => {
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
  
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }
  
  return (
    <section 
      id="about" 
      className="py-20 pt-28 md:pt-32" 
      ref={sectionRef}
      data-section="about"
    >
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image with 3D effect */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-full h-80 md:h-96 overflow-hidden rounded-lg shadow-lg transform perspective-1000">
              <div 
                className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 z-10 rounded-lg"
                style={{ 
                  transform: 'translateZ(20px)',
                  transformStyle: 'preserve-3d'
                }}
              ></div>
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: "url('https://via.placeholder.com/600x800')",
                  transform: 'translateZ(0)',
                  transformStyle: 'preserve-3d'
                }}
              ></div>
              <div 
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 z-20"
                style={{ 
                  transform: 'translateZ(40px)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <h3 className="text-white text-xl font-bold">Handiyan Juansah</h3>
                <p className="text-gray-200">Data Analyst & Web Developer</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary-200 rounded-full opacity-70 z-0"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary-200 rounded-full opacity-70 z-0"></div>
          </motion.div>
          
          {/* Content */}
          <div>
            <motion.div
              className="space-y-6"
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              transition={{ staggerChildren: 0.2 }}
            >
              <motion.div 
                variants={fadeInUpVariants}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">Who I Am</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Hi, I'm Handiyan Juansah, a passionate Data Analyst, Web Developer, and Software Engineer based in Indonesia. With a strong background in System Information and a solid understanding of data analysis, I specialize in transforming raw data into valuable insights to drive business growth.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-3">
                  I have extensive experience in programming, particularly with Python (Flask), SQL, and Excel. I love solving complex problems and have developed various tools and applications that streamline processes, such as an SQL Query Generator and a system for managing product bundles in SQL Server.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-3">
                  When I'm not coding or analyzing data, I enjoy sharing my knowledge through blogging and constantly exploring new ways to improve my technical skills.
                </p>
              </motion.div>
              
              <motion.div 
                variants={fadeInUpVariants}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">Career Journey</h3>
                <div className="space-y-4">
                  <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-3 h-3 rounded-full bg-primary-500"></div>
                      <div className="w-0.5 h-full bg-primary-300 ml-1.5"></div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold">Data Analyst</h4>
                      <p className="text-gray-600 dark:text-gray-400">Company XYZ • 2021 - Present</p>
                      <p className="text-gray-700 dark:text-gray-300 mt-1">
                        Transforming raw data into valuable insights, developing SQL queries, and creating data visualization dashboards to drive business decisions.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-3 h-3 rounded-full bg-primary-500"></div>
                      <div className="w-0.5 h-full bg-primary-300 ml-1.5"></div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold">Web Developer</h4>
                      <p className="text-gray-600 dark:text-gray-400">Company ABC • 2018 - 2021</p>
                      <p className="text-gray-700 dark:text-gray-300 mt-1">
                        Developed responsive web applications using modern frameworks and technologies, focusing on performance optimization and user experience.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-3 h-3 rounded-full bg-primary-500"></div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold">Software Engineer</h4>
                      <p className="text-gray-600 dark:text-gray-400">Startup DEF • 2016 - 2018</p>
                      <p className="text-gray-700 dark:text-gray-300 mt-1">
                        Built and maintained software applications, implemented database solutions, and collaborated with cross-functional teams to deliver high-quality products.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                variants={fadeInUpVariants}
                transition={{ duration: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <a href="#contact" className="btn-primary">Contact Me</a>
                <a href="#projects" className="btn-outline">View Projects</a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 