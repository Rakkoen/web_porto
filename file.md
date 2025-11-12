# 🌐 Personal Website Plan — Rakun Ismail

## ⚙️ Tech Stack
- **Frontend:** React + TypeScript
- **Backend:** Node.js (Express) with TypeScript
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Styling:** Tailwind CSS + Framer Motion (for animation)
- **Deployment (optional):** Vercel / Render / Railway
- **Version Control:** GitHub

---

## 🧭 1. Landing Page (Home)

### 🎯 Tujuan:
Menampilkan identitas utama dan kesan pertama yang profesional.

### 🧩 Isi:
- Foto profil atau ilustrasi diri
- Nama lengkap: **Rakun Ismail**
- Profesi: **Web Developer & Network Engineer**
- Tagline:
  > “Building reliable digital experiences with clean code and creative design.”
- Tombol CTA:
  - `Lihat Portofolio`
  - `Hubungi Saya`

### 💡 Catatan Teknis:
- Gunakan animasi masuk dengan **Framer Motion**
- Layout responsif (mobile-first)
- Tambahkan efek parallax background opsional

---

## 👤 2. Tentang Saya (About Me)

### 🎯 Tujuan:
Memberi gambaran mendalam tentang siapa kamu, latar belakang, dan keahlianmu.

### 🧩 Isi:
- Deskripsi singkat tentang diri
- Latar belakang pendidikan dan pengalaman
- Skill utama (technical + soft skill)
- Tools dan teknologi yang dikuasai (React, Laravel, MikroTik, Photoshop, dsb.)
- Foto profesional atau suasana kerja

### 💡 Catatan Teknis:
- Gunakan grid atau flex layout dengan gambar di satu sisi dan teks di sisi lainnya
- Bisa tambahkan “Download CV” button

---

## 💼 3. Portofolio / Project

### 🎯 Tujuan:
Menunjukkan proyek dan hasil kerja terbaikmu.

### 🧩 Isi:
Tampilkan daftar proyek dengan format:

| Gambar | Judul | Deskripsi | Tech Stack | Tahun | Link |
|--------|--------|------------|-------------|--------|------|

#### 📍 Contoh:
**Project:** Fleet Monitoring System  
**Deskripsi:** Sistem pelacakan truk berbasis web real-time menggunakan Laravel dan Leaflet.js  
**Tech Stack:** Laravel, PostgreSQL, JavaScript  
**Tahun:** 2025  
**Link Demo:** [Demo / GitHub]

### 💡 Catatan Teknis:
- Data proyek disimpan di PostgreSQL
- Tampilkan kategori proyek (Web, Networking, AI, dll.)
- Tambahkan filter kategori dengan React state

---

## 🧠 4. Skill & Tools

### 🧩 Isi:
- Skill teknis: Web Dev, Networking, Design
- Skill non-teknis: Manajemen waktu, komunikasi, problem solving
- Tools:
  - React, Laravel, MikroTik, Photoshop, Figma, PostgreSQL
- Tambahkan logo untuk tiap tools

### 💡 Catatan Teknis:
- Gunakan grid dengan icon dan nama tool
- Tambahkan efek hover

---

## 📜 5. Pengalaman & Pendidikan

### 🧩 Isi:
**Pengalaman Kerja / Proyek Freelance**
- Nama perusahaan / klien
- Posisi dan tahun
- Deskripsi tanggung jawab

**Pendidikan / Sertifikasi**
- Nama lembaga
- Program studi / sertifikasi
- Tahun

### 💡 Catatan Teknis:
- Gunakan timeline component
- Data diambil dari PostgreSQL agar bisa update dinamis

---

## 🗣️ 6. Testimoni (Opsional)

### 🧩 Isi:
- Nama pemberi testimoni
- Jabatan / hubungan kerja
- Ulasan singkat

### 💡 Catatan Teknis:
- Carousel testimoni (React Swiper)
- Tambahkan foto profil kecil

---

## 📰 7. Blog / Artikel (Opsional)

### 🧩 Isi:
- Artikel seputar web development, networking, atau pengalaman kerja
- Tips teknis, tutorial, studi kasus

### 💡 Catatan Teknis:
- Markdown support untuk isi artikel
- Simpan di database PostgreSQL
- Route dinamis untuk `/blog/:slug`

---

## 📩 8. Kontak (Contact)

### 🧩 Isi:
- Formulir kontak (nama, email, pesan)
- Email: `rakun@example.com`
- WhatsApp: `+62 xxx`
- Media sosial:
  - LinkedIn
  - GitHub
  - Instagram

### 💡 Catatan Teknis:
- Gunakan email API (misal: Resend / Nodemailer)
- Validasi form dan notifikasi sukses

---

## ⚙️ 9. Footer

### 🧩 Isi:
- © 2025 Rakun Ismail
- Link cepat: Home | About | Contact
- Ikon media sosial

---

## 💡 Fitur Tambahan Modern (Opsional)

- 🌗 **Dark/Light Mode Switch** (React Context + Tailwind)
- 🌀 **Smooth Animation** (Framer Motion, AOS.js)
- 📊 **Statistik Ringkas**: jumlah proyek, klien, pengalaman kerja
- 📄 **Download CV Button**
- 🌍 **Multilingual Support (EN/ID)** (optional)

---

## 🧱 Struktur Direktori (Rencana)


---

## 🚀 Rencana Tahapan Pembuatan

1. **Setup Environment**
   - Inisialisasi project React + TypeScript
   - Setup ESLint, Prettier, Tailwind

2. **Setup Backend**
   - Buat project Express + Prisma + PostgreSQL
   - Buat API untuk project, blog, contact

3. **Integrasi Frontend–Backend**
   - Konsumsi data via API
   - Testing CRUD Portofolio & Blog

4. **UI/UX Development**
   - Implementasi Framer Motion, responsive layout

5. **Deployment**
   - Deploy frontend ke Vercel
   - Deploy backend ke Render / Railway
   - Setup database PostgreSQL cloud (Neon / Supabase)

---

## 📌 Tujuan Akhir
Website personal profesional yang bisa:
- Menampilkan portofolio dan pengalaman kerja
- Meningkatkan personal branding
- Bisa diperluas menjadi personal blog / CV online

