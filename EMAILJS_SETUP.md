# Panduan Pengaturan EmailJS

File ini berisi instruksi untuk mengatur EmailJS agar form kontak di website portfolio Anda dapat mengirim email ke alamat `mr.juansah27@gmail.com`.

## Langkah 1: Daftar Akun EmailJS

1. Kunjungi [EmailJS](https://www.emailjs.com/) dan daftar akun baru atau masuk jika sudah memiliki akun.
2. EmailJS memiliki paket gratis yang memungkinkan Anda mengirim hingga 200 email per bulan.

## Langkah 2: Tambahkan Layanan Email

1. Di dashboard EmailJS, klik "Email Services" di menu sebelah kiri.
2. Klik "Add New Service".
3. Pilih penyedia email yang ingin Anda gunakan (Gmail, Outlook, dll).
4. Ikuti petunjuk untuk menghubungkan akun email Anda.
5. Beri nama layanan Anda (misalnya "portfolio_contact") dan catat `service_id` yang diberikan.

## Langkah 3: Buat Template Email

1. Di dashboard EmailJS, klik "Email Templates" di menu sebelah kiri.
2. Klik "Create New Template".
3. Isi formulir dengan informasi berikut:
   - Template Name: "Portfolio Contact Form"
   - Subject: "Pesan Baru dari {{name}} via Portfolio Website"
   - Body:
   ```html
   <h2>Anda menerima pesan baru dari website portfolio Anda</h2>
   <p><strong>Nama:</strong> {{name}}</p>
   <p><strong>Email:</strong> {{email}}</p>
   <p><strong>Pesan:</strong></p>
   <p>{{message}}</p>
   ```
4. Klik "Save" dan catat `template_id` yang diberikan.

## Langkah 4: Dapatkan Public Key

1. Di dashboard EmailJS, klik "Account" di menu sebelah kiri.
2. Di bagian "API Keys", Anda akan melihat "Public Key". Catat key ini.

## Langkah 5: Update Kode di Contact.tsx

Buka file `src/components/Contact.tsx` dan update kode berikut dengan nilai-nilai yang Anda catat:

```javascript
const result = await emailjs.sendForm(
  'service_id', // Ganti dengan service_id Anda dari EmailJS
  'template_id', // Ganti dengan template_id Anda dari EmailJS
  formRef.current as HTMLFormElement,
  'public_key' // Ganti dengan public_key Anda dari EmailJS
)
```

Misalnya:

```javascript
const result = await emailjs.sendForm(
  'service_abc123', // Service ID Anda
  'template_xyz789', // Template ID Anda
  formRef.current as HTMLFormElement,
  'user_def456' // Public Key Anda
)
```

## Langkah 6: Uji Form Kontak

1. Jalankan website Anda dengan `npm run dev`.
2. Buka halaman kontak dan isi form.
3. Kirim pesan dan periksa apakah email masuk ke alamat `mr.juansah27@gmail.com`.

## Catatan Penting

- Pastikan nama field di form (`name`, `email`, `message`) sesuai dengan variabel yang Anda gunakan di template email (`{{name}}`, `{{email}}`, `{{message}}`).
- Jika Anda mengalami masalah, periksa console browser untuk melihat pesan error.
- EmailJS memiliki batasan jumlah email yang dapat dikirim per bulan pada paket gratis. Periksa dashboard EmailJS untuk melihat penggunaan Anda. 