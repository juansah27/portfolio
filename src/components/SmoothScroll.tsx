'use client'

import { useEffect } from 'react'

const SmoothScroll = () => {
  useEffect(() => {
    // Konstanta untuk offset scrolling - sesuaikan dengan tinggi navbar
    // Nilai ini harus cukup besar untuk memastikan konten tidak tertutup navbar
    const SCROLL_OFFSET = 80;
    
    // Fungsi untuk menangani smooth scrolling
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      
      // Cek apakah yang diklik adalah anchor link atau parent dari anchor link
      if (target.tagName === 'A' || target.parentElement?.tagName === 'A') {
        const anchorElement = target.tagName === 'A' 
          ? (target as HTMLAnchorElement) 
          : (target.parentElement as HTMLAnchorElement);
        
        const href = anchorElement.getAttribute('href')
        
        // Cek apakah href adalah anchor link (dimulai dengan #)
        if (href && href.startsWith('#') && href.length > 1) {
          e.preventDefault()
          
          const targetId = href.substring(1)
          const targetElement = document.getElementById(targetId)
          
          if (targetElement) {
            // Hitung offset untuk header yang fixed
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET
            
            // Debug info
            console.log(`Scrolling to ${targetId}, position: ${targetPosition}, offset: ${SCROLL_OFFSET}`);
            
            // Smooth scroll ke target
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            })
            
            // Update URL tanpa reload halaman
            window.history.pushState(null, '', href)
            
            // Trigger scroll event untuk memperbarui active section di navbar
            setTimeout(() => {
              window.dispatchEvent(new Event('scroll'))
            }, 500)
          }
        }
      }
    }
    
    // Tambahkan event listener ke document
    document.addEventListener('click', handleAnchorClick)
    
    // Fungsi untuk menangani initial scroll jika URL memiliki hash
    const handleInitialScroll = () => {
      if (window.location.hash && window.location.hash.length > 1) {
        const targetId = window.location.hash.substring(1)
        const targetElement = document.getElementById(targetId)
        
        if (targetElement) {
          // Delay sedikit untuk memastikan halaman sudah ter-render
          setTimeout(() => {
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET
            
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            })
            
            // Trigger scroll event untuk memperbarui active section di navbar
            setTimeout(() => {
              window.dispatchEvent(new Event('scroll'))
            }, 500)
          }, 300)
        }
      }
    }
    
    // Panggil fungsi initial scroll
    handleInitialScroll()
    
    // Cleanup event listener saat komponen unmount
    return () => {
      document.removeEventListener('click', handleAnchorClick)
    }
  }, [])
  
  // Komponen ini tidak merender apapun, hanya menambahkan fungsionalitas
  return null
}

export default SmoothScroll 