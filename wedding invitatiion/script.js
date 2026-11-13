// ===== 1. Baca parameter URL, contoh: index.html?to=Universitas+Negeri&kategori=Kampus =====
const params = new URLSearchParams(window.location.search);
const to = params.get("to");             // null kalau parameter tidak ada
const kategori = params.get("kategori");

const elNama = document.getElementById("namaTamu");
const elBadge = document.getElementById("badgeKategori");

// textContent (bukan innerHTML) supaya input dari URL tidak bisa menyisipkan kode HTML
if (to) {
  elNama.textContent = to;
  document.title = "Undangan untuk " + to;
}
if (kategori) {
  elBadge.textContent = kategori;
  elBadge.dataset.kategori = kategori;   // dipakai CSS untuk memberi warna
  elBadge.hidden = false;
}

// ===== 2. Validasi form RSVP =====
const form = document.getElementById("formRsvp");
const pesan = document.getElementById("pesanForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();                    // cegah halaman reload
  const nama = form.nama.value.trim();
  const hadir = form.hadir.value;

  if (nama === "" || hadir === "") {
    pesan.textContent = "Isi nama dan pilih status kehadiran dulu.";
    pesan.className = "pesan error";
    return;
  }
  pesan.textContent = hadir === "hadir"
    ? `Terima kasih, ${nama}. Kehadiranmu sudah kami catat.`
    : `Terima kasih, ${nama}. Sampai bertemu di acara berikutnya.`;
  pesan.className = "pesan ok";
  form.reset();
});
