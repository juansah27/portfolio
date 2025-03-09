# Panduan Membuat Repository GitHub dan Deploy ke Vercel

Berikut adalah langkah-langkah untuk membuat repository GitHub dan men-deploy website portfolio Anda secara online menggunakan Vercel.

## Langkah 1: Membuat Repository di GitHub

1. Buka [GitHub](https://github.com/) dan login ke akun Anda.
2. Klik tombol "+" di pojok kanan atas, lalu pilih "New repository".
3. Isi informasi repository:
   - Repository name: `portfolio` (atau nama lain yang Anda inginkan)
   - Description: "Portfolio website Handiyan Juansah"
   - Visibility: Public (agar dapat diakses oleh semua orang)
   - Jangan centang opsi "Initialize this repository with a README"
4. Klik "Create repository".

## Langkah 2: Menghubungkan Repository Lokal dengan GitHub

Setelah repository GitHub dibuat, Anda akan melihat instruksi untuk menghubungkan repository lokal. Jalankan perintah berikut di terminal:

```bash
# Menambahkan remote repository
git remote add origin https://github.com/username/portfolio.git
# Ganti 'username' dengan username GitHub Anda dan 'portfolio' dengan nama repository yang Anda buat

# Push ke repository GitHub
git push -u origin main
# Jika branch utama Anda bernama 'master', gunakan: git push -u origin master
```

## Langkah 3: Deploy ke Vercel

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

## Langkah 4: Konfigurasi Domain Kustom (Opsional)

Jika Anda memiliki domain sendiri, Anda dapat mengonfigurasinya di Vercel:

1. Di dashboard Vercel, pilih project Anda.
2. Klik tab "Settings" dan pilih "Domains".
3. Tambahkan domain Anda dan ikuti instruksi untuk mengonfigurasi DNS.

## Langkah 5: Continuous Deployment

Setiap kali Anda melakukan perubahan pada kode dan push ke GitHub, Vercel akan otomatis men-deploy versi terbaru website Anda. Untuk melakukan perubahan:

```bash
# Setelah melakukan perubahan pada kode
git add .
git commit -m "Deskripsi perubahan"
git push
```

## Catatan Penting

- Pastikan file `.gitignore` sudah benar untuk menghindari push file yang tidak perlu ke GitHub.
- Jangan pernah menyimpan informasi sensitif (seperti API key) langsung di kode. Gunakan environment variables di Vercel.
- Jika Anda mengalami masalah dengan deployment, periksa log build di dashboard Vercel. 