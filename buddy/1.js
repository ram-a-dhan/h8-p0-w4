/**
 * Buatlah sebuah object dari hewan, yang memiliki beberapa propert
 * - Nama hewan
 * - Habitat hewan
 * - Jumlah kaki hewan
 * - Jenis kelamin dari hewan
 *
 * Setelah membuat object seperti diatas jawablah pertanyaan dibawah ini
 * - Bagaimana cara mendapatkan nama hewan
 * - Bagaimana cara jika saya ingin menambahkan properi baru ke hewan contoh
 *   contoh bagaimana jika saya ingin menambahkan tipe hewan ( unggas, burung, dll)
 * - Dapatkah saya membuat properti yang berupa sebuah array ke dalam object? Jika iya berikan contoh satu
 * - Dapatkah saya menghapus sebuah properti yang sudah ada di dalam sebuah objek? Jika iya berikan contoh satu
 * - Dapatkah saya membuat properti yang berupa sebuah object ke dalam object? Jika iya berikan contoh satu
 *  - Dapatkah saya melakukan looping di dalam object? Jika iya berikan contoh satu
 *  - Tuliskanlah built in function yang bisa kita gunakan di dalam object?
 */
var hewan = {
    nama: 'jangkrik',
    habitat: 'ladang',
    jumlahKaki: 6,
    jenisKelamin: 'jantan',
};

// Bagaimana cara mendapatkan nama hewan?
console.log(1,hewan.nama);

// Bagaimana cara jika saya ingin menambahkan properi baru ke hewan contoh?
hewan.punyaSayap = false;
hewan['punyaSayap'] = true;
console.log(2,hewan);

// Bagaimana jika saya ingin menambahkan tipe hewan ( unggas, burung, dll)?
hewan.tipe = 'serangga';
console.log(3,hewan);

// Dapatkah saya membuat properti yang berupa sebuah array ke dalam object? Jika iya berikan contoh satu
hewan.warna = ['hitam','cokelat','metallic silver'];
console.log(4,hewan);

// Dapatkah saya menghapus sebuah properti yang sudah ada di dalam sebuah objek? Jika iya berikan contoh satu
delete hewan.warna;
console.log(5,hewan);

// Dapatkah saya membuat properti yang berupa sebuah object ke dalam object? Jika iya berikan contoh satu
hewan.subspesies = {
    '1': 'jangkrik ladang',
    '2': 'jangkrik kota',
    '3': 'jangkrik bos',
}
console.log(6,hewan);

// Dapatkah saya melakukan looping di dalam object? Jika iya berikan contoh satu
console.log(7);
for (var key in hewan) {
    console.log(`${key} --> ${hewan[key]}`);
}

// Tuliskanlah built in function yang bisa kita gunakan di dalam object?
var punyaKey1 = hewan.hasOwnProperty('jenisKelamin');
var punyaKey2 = hewan.hasOwnProperty('pekerjaan');
console.log(8,punyaKey1,punyaKey2);
