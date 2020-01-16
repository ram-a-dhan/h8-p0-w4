function changeMe(arr) {
    
    if (!arr.length) {
        console.log('\"\"');
    } else {
    
        var objArr = [], obj = {};
        for (i = 0; i < arr.length; i++) {
            obj = {};
            for (j = 0; j < 4; j++) {
                // switch (j) {
                //     case 0:
                //         obj.firstName = arr[i][j];
                //         break;
                //     case 1:
                //         obj.lastName = arr[i][j];
                //         break;
                //     case 2:
                //         obj.gender = arr[i][j];
                //         break;
                //     case 3:
                //         if (!arr[i].length) {
                //             obj.age = 'Invalid Birth Year!';
                //             break;
                //         }
                //         obj.age = 2019 - arr[i][j];
                //         break;
                // }
                if (j === 0) {
                    obj.firstName = arr[i][j];
                } else if (j === 1) {
                    obj.lastName = arr[i][j];
                } else if (j === 2) {
                    obj.gender = arr[i][j];
                } else {
                    obj.age = arr[i][j] === undefined ? 'Invalid birth year!' : 2019 - arr[i][j];
                }
                // console.log(obj);
                
            }
            // objArr.push(obj);
            console.log(`${i+1}. ${obj.firstName} ${obj.lastName}:`);
            console.log(obj);
        }
        // console.log(objArr);
        
    }

}
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""