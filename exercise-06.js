function digitPerkalianMinimum(angka) {
    
    var perkalian = []
    for (i = 1; i <= angka; i++) {
        if (angka % i === 0) {
            perkalian.push([i, angka/i]);
        }
    }
    perkalian.length = Math.ceil(perkalian.length/2)
    // return perkalian;
    
    var digit, digitMinimal;
    for (j = 0; j < perkalian.length; j++) {
        if (j === 0) {
            digitMinimal = ('' + perkalian[0][0] + perkalian[0][1]).length;
        } else {
            digit = ('' + perkalian[j][0] + perkalian[j][1]).length
            if (digit < digitMinimal) {
                digitMinimal = digit;
            }
        }
    }
    return digitMinimal;
}
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2