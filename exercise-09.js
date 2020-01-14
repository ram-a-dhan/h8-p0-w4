function checkAB(str) {
    
    var a = [], b = [];
    for (i = 0; i < str.length; i++) {
        if (str[i] === 'a') {
            a.push(i);
        } else if (str[i] === 'b') {
            b.push(i);
        }
    }

    var flag = false;
    for (j = 0; j < a.length; j++) {
        for (k = 0; k < b.length; k++) {
            if (Math.abs(a[j]-b[k]) === 4) {
                flag = true;
            }
        }
    }
    return flag;

}
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false