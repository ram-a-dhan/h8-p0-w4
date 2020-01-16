function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    
    var resi = [];
    for (i = 0; i < arrPenumpang.length; i++) {
        resi[i] = {};
        resi[i].penumpang = arrPenumpang[i][0];
        resi[i].naikDari = arrPenumpang[i][1];
        resi[i].tujuan = arrPenumpang[i][2];
        for (j = 0; j < rute.length; j++) {
            if (rute[j] === resi[i].naikDari) {var dari = j}
            if (rute[j] === resi[i].tujuan) {var ke = j}
        }
        resi[i].bayar = 2000 * (ke - dari);
    }
    return resi;

}
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]