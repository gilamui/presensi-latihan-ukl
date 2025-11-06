# 🚀 Sistem Aplikasi Absensi Online (RESTful API)

## ✨ Deskripsi & Tujuan Proyek
Sistem ini merupakan **RESTful API** yang dirancang untuk mengelola **presensi (kehadiran) online** bagi karyawan atau siswa. Tujuannya adalah menyediakan solusi pencatatan kehadiran yang **terstruktur, aman, dan mudah diakses** menggunakan teknologi modern.

### 🎯 Fungsi Utama
* **Manajemen Pengguna:** Menambahkan dan mengelola data pengguna (karyawan/siswa).
* **Autentikasi Aman:** Implementasi mekanisme **Login dengan JSON Web Token (JWT)** untuk keamanan sesi.
* **Pencatatan Kehadiran:** Mencatat status kehadiran harian (Hadir, Izin, Alpha).
* **Pelaporan:** Menyediakan fitur untuk melihat riwayat kehadiran dan rekapitulasi data (total dan persentase kehadiran).

### 🛠️ Tumpukan Teknologi (Tech Stack)
* **Backend Framework:** **NestJS** (Node.js)
* **Database:** **MySQL**
* **ORM:** **Prisma** (Sebagai ORM untuk interaksi database)
* **Pengujian:** **Postman** (Digunakan untuk pengujian endpoint dan validasi format JSON)

---

## ⚙️ Alur Kerja & Endpoint API
Program berjalan dengan alur kerja yang terstruktur melalui serangkaian endpoint API:

| Tahap | Deskripsi | Endpoint | Metode | Catatan Penting |
| :--- | :--- | :--- | :--- | :--- |
| **1. Registrasi** | Pendaftaran pengguna baru. | `/api/users` | `POST` | Data pengguna disimpan. |
| **2. Autentikasi** | Pengguna login untuk mendapatkan **Token JWT**. | `/api/auth/login` | `POST` | Token ini digunakan pada setiap permintaan terautentikasi. |
| **3. Presensi** | Mencatat status kehadiran (Hadir/Izin/Alpha). | `/api/attendance` | `POST` | Memerlukan Token JWT. |
| **4. Riwayat** | Melihat detail riwayat kehadiran per pengguna. | `/api/attendance/history/{user_id}` | `GET` | Filter berdasarkan ID pengguna. |
| **5. Rekapitulasi** | Menampilkan total dan persentase kehadiran (bulanan). | `/api/attendance/summary/{user_id}` | `GET` | Menyediakan ringkasan performa kehadiran. |

---

## 📸 Hasil Validasi Endpoint (Postman)

| No | Endpoint | Metode | Deskripsi | Dokumentasi Visual |
| :--- | :--- | :--- | :--- | :--- |
| 1 | `/api/users` | POST | Pendaftaran Pengguna Baru |  |
| 2 | `/api/auth/login` | POST | Login & Perolehan Token JWT | 

[Image of Login]
 |
| 3 | `/api/attendance` | POST | Pencatatan Presensi Harian |  |
| 4 | `/api/attendance/summary/1` | GET | Rekapitulasi Kehadiran Bulanan |  |
| 5 | `/api/attendance/history/1` | GET | Riwayat Kehadiran Terperinci |  |

---

## 👨‍💻 Informasi Pengembang
* **Nama:** Mattew Gilam Kyle Marante
* **Kelas:** XI RPL 2
* **Teknologi:** NestJS, Prisma, MySQL

---
