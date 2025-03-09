import Terminal from '@/components/Terminal'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import ChatbotButton from '@/components/ChatbotButton'

export default function Home() {
  return (
    <>
      <Hero />
      
      <div className="fixed bottom-6 right-6 z-50">
        <ChatbotButton />
      </div>
      
      <div className="section-container">
        <Terminal />
      </div>
      
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
} 