/**
 * ============================
 * Outstanding Students Finder
 * ============================
 *
 * Diberikan array berisi nilai livecode suatu kelas, carilah nilai rata-rata dari kelas tersebut, 
 * lalu carilah student yang mendapatkan nilai diatas rata-rata beserta nilainya.
 *
 * Function getStudents menerima 2 parameter, grades adalah array berisi nilai, dan names adalah array yang berisi
 * nama dari student-student tersebut.
 *
 * Panjang array grades dan names selalu sama, 
 * karena index merepresentasikan student ke - i dengan nama di names[i] dan nilai di grades[i].
 *
 * contoh 
 * nilai: [5, 7, 2, 9, 3, 4] -> rata-rata = 5
 * murid: ["aron", "raka", "fauzan", "rivan", "ulul", "ramadhan"] 
 * 
 * maka murid yang nilai nya di atas rata - rata adalah: 
 * ["raka", "rivan"]
 * 
 * RULES: 
 *  - WAJIB MENGGUNAKAN PSEUDOCODE
 *  - Dilarang menggunakan .reduce .map .filter .indexOf .set .includes
 * 
 */

//// PSEUDOCODE
// READ grades, names
// IF grades.length < 1
//   RETURN 'grades should not be empty'
// ELSEIF names.length < 1
//   RETURN 'student name should not be empty'
// ENDIF

// DECLARE mean = 0
// FOR 0 <= i < grades.length
//   mean += grades[i]
// ENDFOR
// mean /= grades.length

// DECLARE aboveAverage = []
// FOR 0 <= j < grades.length
//   IF grades[j] > mean
//     ADD names[j] to aboveAverage 
//   ENDIF
// ENDFOR

// RETURN aboveAverage
////

function getStudents(grades, names) {
  // Your Code here
  if (grades.length < 1) {
    return 'grades should not be empty'
  } else if (names.length < 1) {
    return 'student name should not be empty'
  }

  var mean = 0
  for (let i = 0; i < grades.length; i++) {
    mean += grades[i]
  }
  mean /= grades.length

  var aboveAverage = []
  for (let j = 0; j < grades.length; j++) {
    if (grades[j] > mean) {
      aboveAverage.push(names[j])
    }
  }
  return aboveAverage
}

var grades1 = [10, 9, 8, 7, 6, 8];
var studentNames1 = ['Tony', 'Tifa', 'Cloud', 'Aerith', 'Stark', 'Asd'];
console.log(getStudents(grades1, studentNames1));
// [ 'Tony', 'Tifa' ]

var grades2 = [3, 9, 4, 6];
var studentNames2 = ['Aron', 'Rama', 'Gigih', 'Fauzan'];
console.log(getStudents(grades2, studentNames2));
// [ 'Rama', 'Fauzan' ]

var grades3 = [];
var studentNames3 = ["Rivan", "Raka", "Afif", "Gusti"];
console.log(getStudents(grades3, studentNames3));
// grades should not be empty

var grades4 = [5, 3, 2, 10, 5];
var studentNames4 = [];
console.log(getStudents(grades4, studentNames4));
// student name should not be empty

