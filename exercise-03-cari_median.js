function cariMedian(arr) {

    var tmp;
    for (i = 0; i < arr.length-1; i++) {
        for (j = 0; j < arr.length-1-i; j++) {
            if (arr[j] > arr[j+1]) {
                tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
            }
        }
    }
    // return arr

    var halfLenIdx = (arr.length-1)/2;
    if (halfLenIdx % 2 === 0) {
        return arr[halfLenIdx];
    } else {
        var hliGenap = Math.floor(halfLenIdx);
        return (arr[hliGenap] + arr[hliGenap+1]) / 2;
    }
}
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5