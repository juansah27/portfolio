# Panduan Lengkap Deploy Portfolio ke GitHub dan Vercel

Panduan ini akan membantu Anda membuat repository GitHub baru dan men-deploy website portfolio Anda ke Vercel.

## Langkah 1: Persiapan File

1. Buat folder baru di komputer Anda, misalnya `portfolio-deploy`.
2. Salin file-file berikut dari project Anda saat ini ke folder baru tersebut:
   - Folder `src/`
   - Folder `public/`
   - File `package.json` dan `package-lock.json`
   - File `next.config.js`
   - File `tsconfig.json`
   - File `tailwind.config.js`
   - File `postcss.config.js`
   - File `README.md`
   - File `vercel.json`
   - File `.env.example`

3. Buat file `.gitignore` baru di folder tersebut dengan isi:
   ```
   # dependencies
   /node_modules
   /.pnp
   .pnp.js

   # testing
   /coverage

   # next.js
   /.next/
   /out/

   # production
   /build

   # misc
   .DS_Store
   *.pem

   # debug
   npm-debug.log*
   yarn-debug.log*
   yarn-error.log*

   # local env files
   .env*.local
   .env

   # vercel
   .vercel

   # typescript
   *.tsbuildinfo
   next-env.d.ts
   ```

## Langkah 2: Membuat Repository di GitHub

1. Buka [GitHub](https://github.com/) dan login ke akun Anda.
2. Klik tombol "+" di pojok kanan atas, lalu pilih "New repository".
3. Isi informasi repository:
   - Repository name: `portfolio` (atau nama lain yang Anda inginkan)
   - Description: "Portfolio website Handiyan Juansah"
   - Visibility: Public (agar dapat diakses oleh semua orang)
   - Jangan centang opsi "Initialize this repository with a README"
4. Klik "Create repository".

## Langkah 3: Inisialisasi Git dan Push ke GitHub

1. Buka terminal di folder `portfolio-deploy` yang telah Anda buat.
2. Jalankan perintah berikut untuk inisialisasi Git dan push ke GitHub:

   ```bash
   # Inisialisasi Git
   git init

   # Tambahkan semua file
   git add .

   # Commit pertama
   git commit -m "Initial commit: Portfolio website"

   # Tambahkan remote repository
   git remote add origin https://github.com/username/portfolio.git
   # Ganti 'username' dengan username GitHub Anda dan 'portfolio' dengan nama repository yang Anda buat

   # Push ke GitHub
   git push -u origin main
   # Jika branch utama Anda bernama 'master', gunakan: git push -u origin master
   ```

## Langkah 4: Deploy ke Vercel

1. Buka [Vercel](https://vercel.com/) dan login (Anda dapat login menggunakan akun GitHub).
2. Klik tombol "Add New" dan pilih "Project".
3. Pilih repository GitHub yang baru saja Anda buat.
4. Konfigurasi project:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: npm run build
   - Output Directory: .next
   - Install Command: npm install
5. Tambahkan variabel lingkungan dari file `.env.example` Anda:
   - NEXT_PUBLIC_EMAILJS_SERVICE_ID
   - NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
   - NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
   - NEXT_PUBLIC_EMAILJS_TO_EMAIL
6. Klik "Deploy".

Vercel akan otomatis mendeteksi bahwa ini adalah project Next.js dan mengatur konfigurasi yang sesuai. Setelah deployment selesai, Anda akan mendapatkan URL untuk website Anda (biasanya dalam format `https://portfolio-username.vercel.app`).

## Langkah 5: Konfigurasi Domain Kustom (Opsional)

Jika Anda memiliki domain sendiri, Anda dapat mengonfigurasinya di Vercel:

1. Di dashboard Vercel, pilih project Anda.
2. Klik tab "Settings" dan pilih "Domains".
3. Tambahkan domain Anda (misalnya `handiyanjuansah.com`) dan ikuti instruksi untuk mengonfigurasi DNS.

## Langkah 6: Pemeliharaan dan Update

Setiap kali Anda ingin memperbarui website Anda:

1. Buat perubahan pada kode di komputer Anda.
2. Commit dan push perubahan ke GitHub:
   ```bash
   git add .
   git commit -m "Deskripsi perubahan"
   git push
   ```
3. Vercel akan otomatis men-deploy versi terbaru website Anda.

## Catatan Penting

- Pastikan Anda tidak menyimpan informasi sensitif (seperti API key) langsung di kode. Gunakan environment variables di Vercel.
- Jika Anda mengalami masalah dengan deployment, periksa log build di dashboard Vercel.
- Pastikan semua dependensi tercantum dengan benar di `package.json`.
- Jika Anda menggunakan fitur Next.js yang memerlukan konfigurasi khusus, pastikan untuk mengonfigurasinya dengan benar di `next.config.js`. 