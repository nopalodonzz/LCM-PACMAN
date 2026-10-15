# LCM Quest — Website Permainan Matematik

Website pembelajaran responsif bertema Pac-Man untuk topik pemfaktoran perdana dan Gandaan Sepunya Terkecil (LCM). Dibina menggunakan HTML, CSS dan JavaScript biasa — tiada framework atau proses build diperlukan.

## Fail projek

- `index.html` — struktur kandungan laman.
- `style.css` — reka bentuk neon, susun atur responsif dan gaya permainan.
- `script.js` — kawalan Pac-Man, pengumpulan nombor, inventori token, pokok faktor interaktif, skor, semakan jawapan dan misi.

## Aliran Misi 1

1. Contoh aplikasi masalah bas dipaparkan pada permulaan. Permainan bermula secara automatik selepas 6 saat atau apabila pemain menekan butang mula.
2. Pemain menggerakkan Pac-Man dan mengumpul nombor dalam maze. Nombor yang dikumpul masuk ke inventori.
3. Selepas nombor 12 dan 18 dikumpul, ruang pokok faktor dibuka. Pilih token daripada inventori, kemudian tekan ruang kosong yang betul. Token yang digunakan tidak boleh digunakan semula.
4. Selepas kedua-dua pokok faktor lengkap, masukkan LCM 36 dan tekan Semak.
- `.nojekyll` — memastikan GitHub Pages menerbitkan fail statik seperti biasa.

## Jalankan di komputer

1. Ekstrak ZIP.
2. Buka folder `lcm-quest-website`.
3. Klik dua kali `index.html` untuk membukanya dalam pelayar web.
4. Gerakkan Pac-Man dengan kekunci anak panah atau W/A/S/D. Pada telefon, gunakan butang arah.
5. Masukkan jawapan LCM dan tekan **Semak**.

## Terbitkan melalui GitHub Pages

1. Log masuk ke [GitHub](https://github.com/).
2. Tekan **New repository**.
3. Namakan repository, contohnya `lcm-quest`, pilih **Public**, kemudian tekan **Create repository**.
4. Dalam halaman repository, pilih **Add file → Upload files**.
5. Muat naik `index.html`, `style.css`, `script.js`, `.nojekyll` dan `README.md` daripada folder projek. (Jangan muat naik fail ZIP sahaja.)
6. Tekan **Commit changes**.
7. Buka **Settings → Pages**.
8. Di bahagian **Build and deployment**, pilih **Deploy from a branch**.
9. Pilih branch `main` dan folder `/(root)`, kemudian tekan **Save**.
10. Tunggu beberapa minit dan segarkan halaman Pages. GitHub akan memaparkan pautan website anda, biasanya:
   `https://USERNAME.github.io/lcm-quest/`
   Gantikan `USERNAME` dengan nama pengguna GitHub anda.

Jika anda mahu website muncul terus di `https://USERNAME.github.io/`, namakan repository tepat seperti `USERNAME.github.io`.

## Ubah kandungan

- Ubah teks, tajuk atau seksyen dalam `index.html`.
- Ubah warna, saiz dan susun atur dalam `style.css`.
- Ubah nombor misi, jawapan dan petunjuk dalam senarai `missions` di bahagian atas `script.js`.

## Nota

- Projek ini menggunakan Google Fonts jika internet tersedia; fon sistem akan digunakan sebagai gantian jika tidak.
- Skor dan kemajuan tidak disimpan selepas halaman ditutup atau dimuat semula.
- GitHub Pages hanya menerbitkan fail statik. Jika kemudian anda perlukan akaun pengguna atau pangkalan data, itu memerlukan perkhidmatan tambahan.


### Penyelesaian masalah butang bunyi
Pastikan `index.html` versi terkini mengandungi butang `id="sound-toggle"`. Jika butang tidak berfungsi selepas upload, gantikan ketiga-tiga fail `index.html`, `style.css`, dan `script.js`, kemudian buat hard refresh (`Ctrl+F5`). Tekan butang bunyi sekali untuk membenarkan pelayar memulakan audio.
