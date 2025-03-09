// Konfigurasi EmailJS
// Menggunakan variabel lingkungan untuk keamanan

export const EMAILJS_CONFIG = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_t46paw8',
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_dpivh9k',
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '2gCQhOebFtCEy0BBC',
  toEmail: process.env.NEXT_PUBLIC_EMAILJS_TO_EMAIL || 'mr.juansah27@gmail.com'
} 