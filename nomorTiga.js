function getAngkaTerbesarKedua(arr) {
  // Pengecekan parameter: Apakah parameter yang diberikan adalah array dengan setidaknya 2 elemen
  if (!arr || !Array.isArray(arr) || arr.length < 2) {
    return 'ERROR: Parameter tidak valid atau array memiliki elemen kurang dari 2.';
  }

  // Menghapus duplikat dan mengurutkan array secara menurun
  const uniqueSortedArr = Array.from(new Set(arr)).sort((a, b) => b - a);

  // Pengecekan jumlah elemen unik setelah penghapusan duplikat
  if (uniqueSortedArr.length < 2) {
    return 'ERROR: Tidak ada angka terbesar kedua karena hanya ada satu angka unik dalam array.';
  }

  // Mengembalikan angka terbesar kedua
  return uniqueSortedArr[1];
}

// Data array yang akan diuji
const dataAngka = [10, 11, 31, 31, 1, 9, 3, 20];

// Menggunakan fungsi getAngkaTerbesarKedua untuk mendapatkan angka terbesar kedua dari dataAngka
console.log(getAngkaTerbesarKedua(dataAngka)); // Output: 8

// Contoh pemanggilan yang menghasilkan error karena parameter tidak valid
// console.log(getAngkaTerbesarKedua(0));
// // Output: "ERROR: Parameter tidak valid atau array memiliki elemen kurang dari 2."

// // Contoh pemanggilan yang menghasilkan error karena hanya ada satu angka unik dalam array
// console.log(getAngkaTerbesarKedua([]));
// Output: "ERROR: Tidak ada angka terbesar kedua karena hanya ada satu angka unik dalam array."
