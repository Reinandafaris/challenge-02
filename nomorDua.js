function checkTypeNumber(givenNumber) {
  // Cek apakah parameter tidak diberikan
  if (givenNumber === undefined) {
    return 'Error: Bro where is the parameter?';
  }

  // Cek apakah tipe data dari parameter bukan number atau NaN (Not-a-Number)
  if (typeof givenNumber !== 'number' || isNaN(givenNumber)) {
    return 'Error: Invalid data type';
  }

  // Cek apakah angka yang diberikan genap atau ganjil
  if (givenNumber % 2 === 0) {
    return 'GENAP';
  } else {
    return 'GANJIL';
  }
}

// Contoh penggunaan fungsi checkTypeNumber
console.log(checkTypeNumber(10)); // OUTPUT yang keluar => "GENAP"
console.log(checkTypeNumber(3)); // OUTPUT yang keluar => "GANJIL"
// console.log(checkTypeNumber('3')); // OUTPUT yang keluar => "Error: Invalid data type"
// console.log(checkTypeNumber({})); // OUTPUT yang keluar => "Error: Invalid data type"
// console.log(checkTypeNumber([])); // OUTPUT yang keluar => "Error: Invalid data type"
// console.log(checkTypeNumber()); // OUTPUT yang keluar => "Error: Bro where is the parameter?"
