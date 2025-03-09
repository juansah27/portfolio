# Portfolio Web Modern

Portofolio web modern yang ringan dan responsif dengan teknologi terkini. Website ini menggabungkan elemen interaktif, namun tetap menjaga kinerja dan kecepatan loading halaman.

## Fitur

### 1. Terminal Interaktif yang Ringan
Pengunjung bisa mengetikkan perintah seperti `about`, `projects`, `skills`, dan `contact` untuk melihat informasi yang relevan dalam bentuk teks, dengan animasi halus menggunakan CSS dan sedikit JavaScript.

### 2. AI Chatbot yang Terintegrasi Secara Dinamis
Chatbot AI hanya aktif saat pengunjung memicu interaksi, dan tidak memuat chatbot sepanjang waktu. Menggunakan simulasi OpenAI API untuk memberikan jawaban interaktif.

### 3. Dashboard Data yang Sederhana dan Ringan
Menampilkan statistik atau grafik menggunakan Chart.js dengan teknik lazy loading untuk menjaga kinerja web tetap ringan. Visualisasi data seperti keterampilan dan bahasa pemrograman yang digunakan.

### 4. Storytelling dengan Animasi Scroll yang Halus
Menggunakan animasi CSS dan Framer Motion untuk membuat efek scroll yang interaktif tanpa memberatkan halaman. Fokus pada storytelling yang menggambarkan perjalanan karier.

### 5. Efek 3D yang Ringan dan Sederhana
Menggunakan efek 3D berbasis CSS untuk menciptakan tampilan dinamis (misalnya efek parallax) tanpa memerlukan penggunaan library grafis berat.

### 6. Optimasi Performansi
- Menggunakan Next.js dengan Static Site Generation (SSG) untuk memastikan waktu muat cepat
- Menggunakan Tailwind CSS untuk desain efisien dan minimalis
- Menerapkan lazy loading pada gambar dan elemen besar lainnya
- Mengoptimalkan chatbot dan API agar hanya dipanggil ketika dibutuhkan

### 7. Desain Responsif dan Ringan
Website tetap responsif dan ringan di perangkat mobile dan desktop dengan menggunakan Tailwind CSS dan desain berbasis grid.

### 8. Download CV
Fitur untuk mengunduh CV dalam format PDF, tersedia di lokasi strategis:
- Di menu navigasi (navbar) untuk akses cepat
- Di bagian informasi kontak sebagai bagian dari detail kontak
- Melalui perintah `resume` atau `cv` di terminal interaktif

### 9. Smooth Scrolling & Navigasi
- Navigasi tetap (fixed) di bagian atas halaman yang berubah tampilan saat di-scroll
- Smooth scrolling saat mengklik link navigasi ke bagian tertentu
- Highlight otomatis pada menu navigasi sesuai dengan bagian yang sedang dilihat
- Mendukung navigasi di perangkat mobile dengan menu dropdown
- Animasi transisi halus saat berpindah antar bagian

### 10. Mode Gelap/Terang
Website ini memiliki fitur untuk beralih antara mode gelap dan terang.

### 11. Form Kontak dengan EmailJS
Website ini menggunakan EmailJS untuk mengirim pesan dari form kontak langsung ke email Anda.

## Teknologi yang Digunakan

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS, Framer Motion
- **Visualisasi Data**: Chart.js
- **Integrasi AI**: Simulasi OpenAI API
- **Optimasi**: Static Site Generation, Lazy Loading

## Cara Menjalankan Proyek

### Prasyarat
- Node.js (versi 14.x atau lebih baru)
- npm atau yarn

### Langkah-langkah Instalasi

1. Clone repositori ini
   ```bash
   git clone https://github.com/username/portfolio.git
   cd portfolio
   ```

2. Instal dependensi
   ```bash
   npm install
   # atau
   yarn install
   ```

3. Jalankan server pengembangan
   ```bash
   npm run dev
   # atau
   yarn dev
   ```

4. Buka browser dan akses `http://localhost:3000`

### Build untuk Produksi

```bash
npm run build
# atau
yarn build
```

## Struktur Proyek

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── About.tsx
│   │   ├── ChatbotButton.tsx
│   │   ├── Contact.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   ├── ResumeButton.tsx
│   │   ├── Skills.tsx
│   │   ├── SmoothScroll.tsx
│   │   └── Terminal.tsx
│   └── styles/
├── public/
│   └── assets/
│       └── CV.pdf
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```

## Kustomisasi

Untuk menyesuaikan portofolio ini dengan informasi Anda sendiri, Anda perlu mengedit file-file berikut:

1. `src/components/About.tsx` - Informasi tentang diri Anda
2. `src/components/Skills.tsx` - Keterampilan dan teknologi yang Anda kuasai
3. `src/components/Projects.tsx` - Proyek-proyek yang telah Anda kerjakan
4. `src/components/Contact.tsx` - Informasi kontak Anda
5. `src/components/Terminal.tsx` - Perintah dan output terminal
6. `src/components/Navbar.tsx` - Menu navigasi dan logo

### Mengganti CV.pdf

Untuk mengganti file CV.pdf dengan CV Anda sendiri:

1. Siapkan file CV Anda dalam format PDF
2. Ganti file yang ada di `public/assets/CV.pdf` dengan file CV Anda
3. Pastikan nama file tetap `CV.pdf` atau sesuaikan nama file di komponen `ResumeButton.tsx` dan `Contact.tsx`

## Pengaturan EmailJS

Website ini menggunakan EmailJS untuk mengirim pesan dari form kontak langsung ke email Anda. Untuk mengatur EmailJS:

1. Daftar akun di [EmailJS](https://www.emailjs.com/)
2. Buat layanan email dan template
3. Update file konfigurasi di `src/config/emailjs.ts` dengan ID dan kunci API Anda

Untuk panduan lengkap, lihat file `EMAILJS_SETUP.md`.

## Lisensi

MIT License 