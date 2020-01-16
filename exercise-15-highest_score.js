function highestScore (students) {
    
    var classes = {}, alreadyInList;
    for (var i = 0; i < students.length; i++) {
        alreadyInList = false;
        for (var key1 in classes) {
            if (students[i].class === key1) {alreadyInList = true;}
        }
        if (!alreadyInList) {classes[students[i].class] = {};}
    }
    // return classes;

    var sName, highest;
    for (var key2 in classes) {
        classes[key2] = {};
        highest = 0;
        for (j = 0; j < students.length; j++) {
            if (key2 === students[j].class && students[j].score > highest) {
                highest = students[j].score;
                sName = students[j].name;
            }
        }
        classes[key2].name = sName;
        classes[key2].score = highest;
        
    }
    return classes;

}
  
  // TEST CASE
  console.log(highestScore([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
  
  console.log(highestScore([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }
  
  
  console.log(highestScore([])); //{}