/**
 * Objective: Memahami pengecekan data di dalam object
 *
 * Misalkan kita memiliki sebuah object seperti ini
 * {
 *  name: 'Kosasih',
 *  grade: 90
 * }
 *
 * Buatlah sebuah fungsi yang akan melakukan pengecekan apakah sebuah property ada di dalam object
 */
function hasProperty(obj, key) {

  var found = false;
  for (var prop in obj) {
    if (prop === key) {
      found = true;
    }
  }
  return found;

}
console.log(
  hasProperty(
    {
      name: 'Kosasih',
      grade: 90
    },
    'grade'
  )
) // true
console.log(
  hasProperty(
    {
      name: 'Kosasih',
      grade: 90
    },
    'gender'
  )
) // false
/**
 * Objective: Grouping collection of data into an object
 *
 * Kosasih memiliki sebuah peternakan dengan kumpulan hewan sebagai berikut
 * [ 'Ayam', 'Bebek', 'Ayam', 'Kuda', 'Kuda']
 *
 * Buatlah sebuah fungsi yang akan menerima input sebuah array seperti diatas, dan akan mengembalikan
 * Sebuah object jumlah hewan yang dimiliki oleh Kosasih dikelompokan berdasarkan namanya.
 * Liat driver code untuk output yang lebih jelas
 */
function groupAnimal(array) {

    // var farmArray = [], knownAnimal;
    // for (i = 0; i < array.length; i++) {
    //     knownAnimal = false;
    //     for (j = 0; j < farmArray.length; j++) {
    //         if (array[i] === farmArray[j][0]) {
    //             knownAnimal =true;
    //             farmArray[j][1]++;
    //         }
    //     }        
    //     if (!knownAnimal) {
    //         farmArray.push([array[i],1]);
    //     }
    // }
    // // return farmArray;
    // var farmObject = {};
    // for (k = 0; k < farmArray.length; k++) {
    //     farmObject[farmArray[k][0]] = farmArray[k][1];
    // }
    // return farmObject;

    var farm = {}, alreadyInFarm;
    for (i = 0; i < array.length; i++) {
        alreadyInFarm = false;
        for (var animal in farm) {
            if (animal === array[i]) {
                alreadyInFarm = true;
                farm[array[i]]++;
            }
        }
        if (!alreadyInFarm) {
            farm[array[i]] = 1;
        }
        
    }
    return farm;

}
console.log(groupAnimal(['Ayam', 'Bebek', 'Ayam', 'Kuda', 'Kuda']))
/**
 * {
 *  Ayam: 2,
 *  Kuda: 2,
 *  Bebek: 1
 * }
 */