const dataPenjualanPakAldi = [
  // Data penjualan produk pertama
  {
    namaProduct: 'Sepatu Futsal Nike Vapor Academy 8',
    kategori: 'Sepatu Sport',
    hargaSatuan: 760000,
    totalTerjual: 90,
  },

  // Data penjualan produk kedua
  {
    namaProduct: 'Sepatu Warrior Tristan Black Brown High - Original',
    kategori: 'Sepatu Sneaker',
    hargaSatuan: 960000,
    totalTerjual: 37,
  },

  // Data penjualan produk ketiga
  {
    namaProduct: 'Sepatu Warrior Tristan Maroon High - Original',
    kategori: 'Sepatu Sneaker',
    hargaSatuan: 360000,
    totalTerjual: 90,
  },

  // Data penjualan produk keempat
  {
    namaProduct: 'Sepatu Warrior Rainbow Tosca Corduroy - [BNIB] Original',
    kategori: 'Sepatu Sneaker',
    hargaSatuan: 120000,
    totalTerjual: 90,
  },
];

// Fungsi untuk menghitung total penjualan
function hitungTotalPenjualan(dataPenjualan) {
  let total = 0; // Inisialisasi total penjualan dengan nilai awal 0

  // Menggunakan loop untuk mengakses setiap objek dalam dataPenjualan
  for (const produk of dataPenjualan) {
    total += produk.totalTerjual; // Menambahkan totalTerjual produk saat ini ke total penjualan
  }

  return total; // Mengembalikan nilai total penjualan setelah melewati semua produk
}

// Memanggil fungsi hitungTotalPenjualan dengan dataPenjualanPakAldi
console.log(hitungTotalPenjualan(dataPenjualanPakAldi));
// Output yang diharapkan: 307
// 307 dari mana? dari setiap value property 'totalTerjual', yaitu 90 + 37 + 90 + 90
