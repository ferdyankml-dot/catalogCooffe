export interface Kopi {
  id: string;
  nama: string;
  asal: string;
  tipe: "Arabica" | "Robusta";
  profilRasa: string[];
  harga: number;
  gambar: string;
  deskripsi: string;
}

export const daftarKopi: Kopi[] = [
  {
    id: "kopi-1",
    nama: "Arabica Gayo Special",
    asal: "Aceh Tengah",
    tipe: "Arabica",
    profilRasa: ["Spices", "Dark Chocolate", "Citrusy"],
    harga: 85000,
    gambar: "/bijiKopi1.jpg",
    deskripsi: "Kopi Arabica pilihan dari dataran tinggi Gayo dengan kombinasi aroma rempah hangat, cita rasa cokelat hitam yang kaya, serta diakhiri nuansa kesegaran citrus."
  },
  {
    id: "kopi-2",
    nama: "Robusta Temanggung",
    asal: "Jawa Tengah",
    tipe: "Robusta",
    profilRasa: ["Nutty", "Caramel", "Earthy", "Bold"],
    harga: 65000,
    gambar: "/bijiKopi2.jpg",
    deskripsi: "Kopi Robusta tebal khas Temanggung dengan aroma dominan kacang sangrai, cita rasa earthy yang mantap, dan rasa manis karamel yang lembut."
  },
  {
    id: "kopi-3",
    nama: "Arabica Kintamani",
    asal: "Bali",
    tipe: "Arabica",
    profilRasa: ["Sweet Orange", "Mild Body", "Low Acid"],
    harga: 88000,
    gambar: "/bijiKopi3.jpg",
    deskripsi: "Ditanam di sekitar lereng Gunung Batur, kopi ini memiliki ciri khas cita rasa jeruk manis alami yang segar, bodi yang sedang, dan tingkat keasaman yang ramah di lambung."
  },
  {
    id: "kopi-4",
    nama: "Arabica Toraja Kalosi",
    asal: "Sulawesi Selatan",
    tipe: "Arabica",
    profilRasa: ["Herbal", "Dark Chocolate", "Ripe Fruit"],
    harga: 92000,
    gambar: "/bijiKopi4.jpg",
    deskripsi: "Kopi legendaris dari dataran tinggi Toraja dengan profil rasa yang kompleks. Memiliki aroma herbal yang khas, rasa manis pahit cokelat tua, sertaaftertaste buah matang."
  }
];