'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([
    { role: 'assistant', content: 'Hello! I\'m Handiyan\'s AI assistant. How can I help you with information about his portfolio?' }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const toggleChatbot = () => {
    setIsOpen(!isOpen)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!input.trim() || isLoading) return
    
    const userMessage = input.trim()
    setInput('')
    
    // Add user message to chat
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    
    // Set loading state
    setIsLoading(true)
    
    try {
      // Simulate API call to OpenAI
      // In a real implementation, you would call the OpenAI API here
      setTimeout(() => {
        let response = ''
        
        // Simple pattern matching for demo purposes
        if (userMessage.toLowerCase().includes('project') || userMessage.toLowerCase().includes('projects')) {
          response = 'Handiyan has worked on several projects including an SQL Query Generator, a Product Bundle Manager, and this modern web portfolio. You can find more details in the Projects section or by typing "projects" in the terminal.'
        } else if (userMessage.toLowerCase().includes('skill') || userMessage.toLowerCase().includes('skills')) {
          response = 'Handiyan is skilled in data analysis with SQL, Python, and Excel. He also has experience in web development with technologies like React, Next.js, and Flask. He\'s proficient with various database systems and visualization tools.'
        } else if (userMessage.toLowerCase().includes('contact')) {
          response = 'You can contact Handiyan via email at handiyan.juansah@example.com or through his LinkedIn and GitHub profiles.'
        } else if (userMessage.toLowerCase().includes('hello') || userMessage.toLowerCase().includes('hi') || userMessage.toLowerCase().includes('hey')) {
          response = 'Hello! Nice to meet you. How can I help you learn more about Handiyan\'s portfolio?'
        } else if (userMessage.toLowerCase().includes('background') || userMessage.toLowerCase().includes('experience')) {
          response = 'Handiyan is a Data Analyst, Web Developer, and Software Engineer based in Indonesia. He has a strong background in System Information and specializes in transforming raw data into valuable insights to drive business growth.'
        } else {
          response = 'Thank you for your question. I can provide information about Handiyan\'s projects, skills, background, or contact information. Please ask something more specific.'
        }
        
        setMessages(prev => [...prev, { role: 'assistant', content: response }])
        setIsLoading(false)
      }, 1000)
    } catch (error) {
      console.error('Error calling AI service:', error)
      setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, there was an error processing your request. Please try again later.' }])
      setIsLoading(false)
    }
  }

  return (
    <>
      <motion.button
        className="bg-primary-600 hover:bg-primary-700 text-white rounded-full p-3 shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleChatbot}
        aria-label="Toggle AI Chatbot"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-20 right-6 w-80 md:w-96 bg-white dark:bg-gray-900 rounded-lg shadow-xl overflow-hidden z-50 border border-gray-200 dark:border-gray-800"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="bg-primary-600 text-white p-4 flex justify-between items-center">
              <h3 className="font-medium">AI Assistant</h3>
              <button 
                onClick={toggleChatbot}
                className="text-white hover:text-gray-200"
                aria-label="Close chatbot"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="h-80 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-800">
              {messages.map((message, index) => (
                <div 
                  key={index} 
                  className={`mb-4 ${message.role === 'user' ? 'text-right' : 'text-left'}`}
                >
                  <div 
                    className={`inline-block p-3 rounded-lg ${
                      message.role === 'user' 
                        ? 'bg-primary-600 text-white' 
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100'
                    } max-w-[80%]`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="text-left mb-4">
                  <div className="inline-block p-3 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse"></div>
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-grow p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  className="bg-primary-600 hover:bg-primary-700 text-white p-2 rounded-md disabled:opacity-50"
                  disabled={isLoading || !input.trim()}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ChatbotButton 