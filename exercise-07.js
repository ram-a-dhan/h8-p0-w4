function urutkanAbjad(str) {
    
    var strArr = [];
    for (i = 0; i < str.length; i++) {
        strArr.push(str[i]);
    }
    // return strArr;
    
    var tmp;
    for (j = 0; j < strArr.length-1; j++) {
        for (k = 0; k < strArr.length-1-j; k++) {
            if (strArr[k] > strArr[k+1]) {
                tmp = strArr[k];
                strArr[k] = strArr[k+1];
                strArr[k+1] = tmp;
            }
        }
    }
    // return strArr;

    var strNew = '';
    for (l = 0; l < strArr.length; l++) {
        strNew += strArr[l];
    }
    return strNew;

}
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'