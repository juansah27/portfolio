'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

type CommandOutput = {
  id: number
  text: string | JSX.Element
}

const Terminal = () => {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<CommandOutput[]>([
    { id: 0, text: 'Welcome to my interactive portfolio terminal! Type "help" to see available commands.' },
  ])
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!input.trim()) return
    
    const newCommandHistory = [input, ...commandHistory]
    setCommandHistory(newCommandHistory)
    setHistoryIndex(-1)
    
    const newOutput = processCommand(input.trim().toLowerCase())
    setHistory([...history, { id: history.length, text: `$ ${input}` }, ...newOutput])
    setInput('')
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1
        setHistoryIndex(newIndex)
        setInput(commandHistory[newIndex])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setInput(commandHistory[newIndex])
      } else if (historyIndex === 0) {
        setHistoryIndex(-1)
        setInput('')
      }
    } else if (e.key === 'Tab') {
      e.preventDefault()
      const commands = ['help', 'about', 'skills', 'projects', 'contact', 'clear', 'resume', 'cv']
      const matchingCommands = commands.filter(cmd => cmd.startsWith(input.toLowerCase()))
      
      if (matchingCommands.length === 1) {
        setInput(matchingCommands[0])
      } else if (matchingCommands.length > 1 && input) {
        const newOutput = [{ 
          id: history.length + 1, 
          text: matchingCommands.join('  ') 
        }]
        setHistory([...history, ...newOutput])
      }
    }
  }

  const processCommand = (cmd: string): CommandOutput[] => {
    const output: CommandOutput[] = []
    const baseId = history.length + 1
    
    switch (cmd) {
      case 'help':
        output.push({ 
          id: baseId, 
          text: (
            <div className="terminal-output">
              <p className="font-bold">Available commands:</p>
              <p><span className="text-primary-400">about</span> - Information about me</p>
              <p><span className="text-primary-400">skills</span> - My skills and technologies</p>
              <p><span className="text-primary-400">projects</span> - Projects I've worked on</p>
              <p><span className="text-primary-400">contact</span> - Contact information</p>
              <p><span className="text-primary-400">resume</span> or <span className="text-primary-400">cv</span> - Download my resume</p>
              <p><span className="text-primary-400">clear</span> - Clear the terminal</p>
              <p><span className="text-primary-400">help</span> - Show available commands</p>
            </div>
          ) 
        })
        break
        
      case 'about':
        output.push({ 
          id: baseId, 
          text: (
            <div className="terminal-output">
              <p className="font-bold text-secondary-400">About Me</p>
              <p>Hi, I'm Handiyan Juansah, a passionate Data Analyst, Web Developer, and Software Engineer based in Indonesia.</p>
              <p>With a strong background in System Information and data analysis, I transform raw data into valuable insights to drive business growth.</p>
              <p>I have extensive experience in Python (Flask), SQL, and Excel, and I love solving complex problems.</p>
              <p>When I'm not coding, I enjoy sharing knowledge through blogging and exploring new technologies.</p>
            </div>
          ) 
        })
        break
        
      case 'skills':
        output.push({ 
          id: baseId, 
          text: (
            <div className="terminal-output">
              <p className="font-bold text-secondary-400">Skills</p>
              <p><span className="text-primary-400">Data Analysis:</span> SQL, Python, Excel, Data Visualization, Business Intelligence</p>
              <p><span className="text-primary-400">Web Development:</span> HTML/CSS, JavaScript, React, Next.js, Flask</p>
              <p><span className="text-primary-400">Database:</span> SQL Server, PostgreSQL, MongoDB</p>
              <p><span className="text-primary-400">Tools:</span> Git, VS Code, Jupyter Notebook, Power BI, Tableau</p>
            </div>
          ) 
        })
        break
        
      case 'projects':
        output.push({ 
          id: baseId, 
          text: (
            <div className="terminal-output">
              <p className="font-bold text-secondary-400">Projects</p>
              <p><span className="text-primary-400">SQL Query Generator</span> - A tool that automates the creation of complex SQL queries</p>
              <p><span className="text-primary-400">Product Bundle Manager</span> - A system for managing product bundles in SQL Server</p>
              <p><span className="text-primary-400">Modern Web Portfolio</span> - A lightweight, responsive portfolio website built with Next.js</p>
              <p>Type <span className="text-primary-400">projects [project-name]</span> for more details</p>
            </div>
          ) 
        })
        break
        
      case 'contact':
        output.push({ 
          id: baseId, 
          text: (
            <div className="terminal-output">
              <p className="font-bold text-secondary-400">Contact</p>
              <p><span className="text-primary-400">Email:</span> handiyan.juansah@example.com</p>
              <p><span className="text-primary-400">GitHub:</span> github.com/handiyanjuansah</p>
              <p><span className="text-primary-400">LinkedIn:</span> linkedin.com/in/handiyanjuansah</p>
              <p><span className="text-primary-400">Twitter:</span> twitter.com/handiyanjuansah</p>
            </div>
          ) 
        })
        break
        
      case 'resume':
      case 'cv':
        output.push({ 
          id: baseId, 
          text: (
            <div className="terminal-output">
              <p className="font-bold text-secondary-400">Resume</p>
              <p>You can download my resume by clicking the link below:</p>
              <p className="mt-2">
                <a 
                  href="/assets/CV.pdf" 
                  download="Handiyan_Juansah_CV.pdf"
                  className="text-primary-400 hover:text-primary-500 underline inline-flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 mr-1" 
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
                  Download CV.pdf
                </a>
              </p>
            </div>
          ) 
        })
        break
        
      case 'clear':
        setHistory([])
        return []
        
      default:
        if (cmd.startsWith('projects ')) {
          const projectName = cmd.split(' ')[1]
          
          if (projectName === 'sql' || projectName === 'sql-query-generator') {
            output.push({ 
              id: baseId, 
              text: (
                <div className="terminal-output">
                  <p className="font-bold text-secondary-400">SQL Query Generator</p>
                  <p><span className="text-primary-400">Technologies:</span> Python, Flask, SQL, JavaScript</p>
                  <p><span className="text-primary-400">Features:</span> Automated SQL query creation, template system, query optimization, export functionality</p>
                  <p><span className="text-primary-400">Link:</span> <a href="#" className="text-blue-400 underline">github.com/handiyanjuansah/sql-query-generator</a></p>
                </div>
              ) 
            })
          } else if (projectName === 'bundle' || projectName === 'product-bundle-manager') {
            output.push({ 
              id: baseId, 
              text: (
                <div className="terminal-output">
                  <p className="font-bold text-secondary-400">Product Bundle Manager</p>
                  <p><span className="text-primary-400">Technologies:</span> SQL Server, C#, .NET, Entity Framework</p>
                  <p><span className="text-primary-400">Features:</span> Bundle creation and management, inventory tracking, pricing rules, reporting dashboard</p>
                  <p><span className="text-primary-400">Link:</span> <a href="#" className="text-blue-400 underline">github.com/handiyanjuansah/product-bundle-manager</a></p>
                </div>
              ) 
            })
          } else if (projectName === 'portfolio' || projectName === 'web-portfolio') {
            output.push({ 
              id: baseId, 
              text: (
                <div className="terminal-output">
                  <p className="font-bold text-secondary-400">Modern Web Portfolio</p>
                  <p><span className="text-primary-400">Technologies:</span> Next.js, TypeScript, Tailwind CSS, Framer Motion</p>
                  <p><span className="text-primary-400">Features:</span> Interactive terminal, AI chatbot, data visualization, responsive design</p>
                  <p><span className="text-primary-400">Link:</span> <a href="#" className="text-blue-400 underline">github.com/handiyanjuansah/portfolio</a></p>
                </div>
              ) 
            })
          } else {
            output.push({ 
              id: baseId, 
              text: `Project '${projectName}' not found. Type 'projects' to see the list of projects.` 
            })
          }
        } else {
          output.push({ 
            id: baseId, 
            text: `Command '${cmd}' not recognized. Type 'help' to see available commands.` 
          })
        }
    }
    
    return output
  }

  return (
    <motion.div 
      className="terminal-container"
      ref={terminalRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onClick={focusInput}
    >
      <div className="mb-4 flex items-center space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <div className="ml-2 text-xs text-gray-400">handiyan@portfolio:~</div>
      </div>
      
      <div className="h-80 overflow-y-auto">
        {history.map((item) => (
          <div key={item.id} className="terminal-line">
            {typeof item.text === 'string' ? (
              item.text.startsWith('$') ? (
                <div>
                  <span className="terminal-prompt">$</span>
                  <span>{item.text.substring(1)}</span>
                </div>
              ) : (
                <div className="terminal-output">{item.text}</div>
              )
            ) : (
              item.text
            )}
          </div>
        ))}
        
        <form onSubmit={handleSubmit} className="terminal-line">
          <span className="terminal-prompt">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="terminal-input"
            autoFocus
            aria-label="Terminal input"
          />
        </form>
      </div>
      
      <div className="mt-4 text-xs text-gray-400">
        Tip: Use ↑/↓ keys to navigate command history and Tab for auto-complete.
      </div>
    </motion.div>
  )
}

export default Terminal 