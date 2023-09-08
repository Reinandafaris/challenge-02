// Data penjualan novel yang diberikan
const dataPenjualanNovel = [
  {
    idProduct: 'BOOK002421',
    namaProduk: 'Pulang - Pergi',
    penulis: 'Tere Liye',
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: 'BOOK002351',
    namaProduk: 'Selamat Tinggal',
    penulis: 'Tere Liye',
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: 'BOOK002941',
    namaProduk: 'Garis Waktu',
    penulis: 'Fiersa Besari',
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: 'BOOK002941',
    namaProduk: 'Laskar Pelangi',
    penulis: 'Andrea Hirata',
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

// Fungsi untuk mengubah angka menjadi format Rupiah
function formatRupiah(angka) {
  return Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(angka);
}

// Fungsi untuk menghitung total keuntungan dan persentase keuntungan
function hitungTotalKeuntungan(data) {
  let totalKeuntungan = 0;
  let totalModal = 0;

  // Melakukan perhitungan untuk setiap produk dalam data penjualan
  data.forEach((produk) => {
    const modal = produk.hargaBeli * (produk.totalTerjual + produk.sisaStok);
    const keuntungan = (produk.hargaJual - produk.hargaBeli) * produk.totalTerjual;

    totalModal += modal;
    totalKeuntungan += keuntungan;
  });

  // Menghitung persentase keuntungan
  const persentaseKeuntungan = ((totalKeuntungan / totalModal) * 100).toFixed(2) + '%';

  return {
    totalKeuntungan: formatRupiah(totalKeuntungan),
    totalModal: formatRupiah(totalModal),
    persentaseKeuntungan: persentaseKeuntungan,
  };
}

// Fungsi untuk mendapatkan produk yang paling banyak terjual
function dapatkanProdukTerlaris(data) {
  let terjualTerbanyak = 0;
  let produkTerlaris = '';

  // Mencari produk dengan totalTerjual tertinggi
  data.forEach((produk) => {
    if (produk.totalTerjual > terjualTerbanyak) {
      terjualTerbanyak = produk.totalTerjual;
      produkTerlaris = produk.namaProduk;
    }
  });

  return produkTerlaris;
}

// Fungsi untuk mendapatkan penulis dengan penjualan terbanyak
function dapatkanPenulisTerpopuler(data) {
  const penjualanPenulis = {};

  // Menghitung total penjualan untuk setiap penulis
  data.forEach((produk) => {
    if (!penjualanPenulis[produk.penulis]) {
      penjualanPenulis[produk.penulis] = 0;
    }
    penjualanPenulis[produk.penulis] += produk.totalTerjual;
  });

  let penjualanTerbanyak = 0;
  let penulisTerpopuler = '';

  // Mencari penulis dengan penjualan terbanyak
  for (const penulis in penjualanPenulis) {
    if (penjualanPenulis[penulis] > penjualanTerbanyak) {
      penjualanTerbanyak = penjualanPenulis[penulis];
      penulisTerpopuler = penulis;
    }
  }

  return penulisTerpopuler;
}

// Fungsi untuk menghasilkan laporan berdasarkan data penjualan
function hasilkanLaporan(data) {
  const totalData = hitungTotalKeuntungan(data);
  const produkTerlaris = dapatkanProdukTerlaris(data);
  const penulisTerpopuler = dapatkanPenulisTerpopuler(data);

  return {
    ...totalData,
    produkBukuTerlaris: produkTerlaris,
    penulisTerlaris: penulisTerpopuler,
  };
}

// Menghasilkan laporan berdasarkan data penjualan yang diberikan
const laporan = hasilkanLaporan(dataPenjualanNovel);
console.log(laporan);
