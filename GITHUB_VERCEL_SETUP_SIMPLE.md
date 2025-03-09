# Panduan Sederhana untuk Deploy Portfolio ke GitHub dan Vercel

## Langkah 1: Membuat Repository di GitHub

1. Buka [GitHub](https://github.com/) dan login ke akun Anda.
2. Klik tombol "+" di pojok kanan atas, lalu pilih "New repository".
3. Isi informasi repository:
   - Repository name: `portfolio` (atau nama lain yang Anda inginkan)
   - Description: "Portfolio website Handiyan Juansah"
   - Visibility: Public (agar dapat diakses oleh semua orang)
   - Centang opsi "Initialize this repository with a README"
4. Klik "Create repository".

## Langkah 2: Clone Repository ke Komputer Anda

1. Di halaman repository GitHub, klik tombol "Code" dan salin URL repository.
2. Buka terminal di folder yang Anda inginkan dan jalankan perintah:
   ```bash
   git clone https://github.com/username/portfolio.git
   cd portfolio
   ```
   (Ganti `username` dengan username GitHub Anda dan `portfolio` dengan nama repository yang Anda buat)

## Langkah 3: Salin File-File Penting

1. Salin semua file dari folder project Anda saat ini ke folder repository baru, kecuali:
   - Folder `.git`
   - Folder `.next`
   - Folder `node_modules`
   - Folder `out`
   - File-file yang tidak diperlukan lainnya

2. Pastikan Anda menyalin file-file berikut:
   - `src/` (folder dengan semua komponen)
   - `public/` (folder dengan aset statis)
   - `package.json` dan `package-lock.json`
   - `next.config.js`
   - `tsconfig.json`
   - `tailwind.config.js`
   - `postcss.config.js`
   - `.gitignore`
   - `README.md`
   - `vercel.json`

## Langkah 4: Commit dan Push ke GitHub

1. Di folder repository baru, jalankan perintah berikut:
   ```bash
   git add .
   git commit -m "Initial commit: Portfolio website"
   git push
   ```

## Langkah 5: Deploy ke Vercel

1. Buka [Vercel](https://vercel.com/) dan login (Anda dapat login menggunakan akun GitHub).
2. Klik tombol "Add New" dan pilih "Project".
3. Pilih repository GitHub yang baru saja Anda buat.
4. Konfigurasi project:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: npm run build
   - Output Directory: .next
   - Install Command: npm install
5. Klik "Deploy".

Vercel akan otomatis mendeteksi bahwa ini adalah project Next.js dan mengatur konfigurasi yang sesuai. Setelah deployment selesai, Anda akan mendapatkan URL untuk website Anda (biasanya dalam format `https://portfolio-username.vercel.app`).

## Langkah 6: Konfigurasi Domain Kustom (Opsional)

Jika Anda memiliki domain sendiri, Anda dapat mengonfigurasinya di Vercel:

1. Di dashboard Vercel, pilih project Anda.
2. Klik tab "Settings" dan pilih "Domains".
3. Tambahkan domain Anda dan ikuti instruksi untuk mengonfigurasi DNS.

## Catatan Penting

- Pastikan Anda telah menginstal semua dependensi dengan menjalankan `npm install` di folder repository baru sebelum melakukan commit.
- Jika Anda mengalami masalah dengan deployment, periksa log build di dashboard Vercel. 