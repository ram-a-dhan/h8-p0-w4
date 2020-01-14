function angkaPrima(angka) {
    // if ((angka > 1 && angka % 2 !== 0 && angka % 3 !== 0) || angka === 2 || angka === 3) {
    //     return true;
    // } else {
    //     return false;
    // }
    if (angka > 1) {
        var bukanPrima = 0;
        for (i = 2; i < angka; i++) {
            if (angka % i === 0) {
                bukanPrima++;
            }
        }
        // console.log(bukanPrima);
        if (bukanPrima === 0) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}
  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false