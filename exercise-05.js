function ubahHuruf(kata) {
    
    // var kodeHuruf = 0, kataBaru = '';
    // for (let i = 0; i < kata.length; i++) {
    //     kodeHuruf = kata.charCodeAt(i);
    //     if (kodeHuruf >= 97 && kodeHuruf < 122) {
    //         kataBaru += String.fromCharCode(kodeHuruf+1);
    //         // console.log([kata[i],kodeHuruf,kataBaru[i]]);
    //     } else if (kodeHuruf === 122) {
    //         kataBaru += 'a';
    //     }
    // }
    // return kataBaru;

    var abca = 'abcdefghijklmnopqrstuvwxyza', kataBaru = '';
    for (i = 0; i < kata.length; i++) {
        for (j = 0; j < abca.length-1; j++) {
            if (kata[i] === abca[j]) {
                kataBaru += abca[j+1];
            }   
        }
    }
    return kata + ' --> ' + kataBaru;
}
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu