function cariModus(arr) {

    // var listModus = [], counterModus;
    // for (i = 0; i < arr.length; i++) {
    //     counterModus = 0;
    //     for (j = i; j < arr.length; j++) {
    //         if (arr[i] === arr[j]) {
    //             counterModus++;
    //         }
    //     }
    //     listModus.push(counterModus);
    // }
    
    // var topModus = 0;
    // for (k = 0; k < listModus.length; k++) {
    //     if (listModus[k] > topModus) {
    //         topModus = listModus[k];
    //     }
    // }

    // var juaraModus = []
    // for (let l = 0; l < listModus.length; l++) {
    //     if (listModus[l] === topModus && listModus[l] > 1) {
    //         juaraModus.push([arr[l],listModus[l]]);
    //     }
    // }
    // // return juaraModus;
    // return (juaraModus.length === 0 || juaraModus[0][1] === arr.length) ? -1 : juaraModus[0][0];

    var listModus = [];
    for (let i = 0; i < arr.length; i++) {
        var alreadyInList = -1;
        for (let j = 0; j < listModus.length; j++) {
            // console.log(listModus[j][0])
            if (arr[i] === listModus[j][0]) {
                alreadyInList = j;
            }
        }
        if (alreadyInList === -1) {
            listModus.push([arr[i],1]);
        } else {
            listModus[alreadyInList][1]++;
        }
    }

    var chosenModus = listModus[0];
    for (i = 0; i < listModus.length-1; i++) {
        if (chosenModus[1] < listModus[i][1]) {
            chosenModus = listModus[i];
        }
    }
    
    return chosenModus[1] === 1 || chosenModus[1] === arr.length  ? -1 : chosenModus[0];
}
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1