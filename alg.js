let array1 = [
  /*
  [[], 3], //A 0 
  [[0], 2], //B 1
  [[0], 1], //C 2
  [[1, 2], 3], //D 3
  [[1, 2], 1], //E 4
  [[4], 1], //F 5
  [[3, 5], 1], //G 6
*/
/*
  [[], 0], //A 0
  [[0], 3], //B 1
  [[0], 4], //C 2
  [[2], 5], //D 3
  [[1, 3], 9], //E 4
  [[1, 3], 7], //F 5
  [[2], 8], //G 6
  [[2], 5], //H 7
  [[7], 6], //I 8
  [[5, 6, 8], 10], //J 9
  [[5, 6, 8], 3], //K 10
  [[5, 6, 8], 7], //L 11
  [[7], 4], //M 12
  [[11, 12], 5], //N 13
  [[4, 9], 3], //O 14
  [[10, 13, 14], 0], //P 15
  
  */
  [[], 2], //A 0
  [[0], 2], //B 1
  [[0], 2], //C 2
  [[1,2], 1], //D 3
  [[3], 3], //E 4
  [[4], 1], //F 5
  [[5], 2], //G 6
  [[5], 2], //H 7
  [[5], 3], //I 8
  [[5], 3], //J 9
  [[5], 3], //K 10
  [[5], 54], //M 11
  [[7], 6], //N 12
  [[7], 5], //O 13
  [[8], 5], //P 14
  [[9, 10], 5], //A 15
  [[13], 2], //B 16
  [[12], 2], //C 17
  [[12], 4], //D 18
  [[15], 8], //E 19
  [[6, 15], 8], //F 20
  [[14], 8], //G 21
  [[14], 4], //H 22
  [[15], 4], //I 23
  [[15], 4], //J 24
  [[23], 6], //K 25
  [[19, 17, 18], 6], //L 26
  [[24], 7], //M 27
  [[22], 42], //N 28
  [[20], 4], //O 29
  [[21], 5], //P 30
  [[20], 8], //G 31
  [[21], 9], //H 32
  [[21, 25], 4], //I 33
  [[21, 25], 4], //J 34
  [[25], 12], //K 35
  [[30], 4], //L 36
  [[16, 31, 29], 30], //M 37
  [[36], 6], //N 38
  [[31, 33, 34, 35, 27], 9], //O 39
  [[38, 32, 33, 34], 3], //P 40
  [[38], 9], //G 41
  [[43], 6], //H 42
  [[26, 29, 41, 40, 39], 9], //I 43
  [[43], 1], //J 44
  [[43], 4], //K 45
  [[43], 7], //L 46
  [[45, 42, 46], 1], //M 47
  [[37, 47, 44, 28, 11], 2], //N 48

/*
  [[], 2], //A 0
  [[0], 2], //B 1
  [[0], 2], //C 2
  [[1,2], 1], //D 3
  [[3], 3], //E 4
  [[4], 1], //F 5
  [[5], 2], //G 6
  [[5], 2], //H 7
  [[5], 3], //I 8
  [[5], 3], //J 9
  [[5], 3], //K 10
  [[5], 54], //M 11
  [[7], 6], //N 12
  [[7], 5], //O 13
  [[8], 5], //P 14
  [[9, 10], 5], //A 15
  [[13], 2], //B 16
  [[12], 2], //C 17
  [[12], 4], //D 18
  [[15], 8], //E 19
  [[6, 15], 8], //F 20
  [[14], 8], //G 21
  [[14], 4], //H 22
  [[15], 4], //I 23
  [[15], 4], //J 24
  [[23], 6], //K 25
  [[19, 17, 18], 6], //L 26
  [[24], 7], //M 27
  [[22], 42], //N 28
  [[20], 4], //O 29
  [[21], 5], //P 30
  [[20], 8], //G 31
  [[21], 9], //H 32
  [[21, 25], 4], //I 33
  [[21, 25], 4], //J 34
  [[25], 12], //K 35
  [[30], 4], //L 36
  [[16, 31, 29], 30], //M 37
  [[36], 6], //N 38
  [[31, 33, 34, 35, 27], 9], //O 39
  [[38, 32, 33, 34], 3], //P 40
  [[38], 9], //G 41
  [[43], 6], //H 42
  [[26, 29, 41, 40, 39], 9], //I 43
  [[43], 1], //J 44
  [[43], 4], //K 45
  [[43], 7], //L 46
  [[45, 42, 46], 1], //M 47
  [[37, 47, 44, 28, 11], 2], //N 48
  */
  
/*
  [[], 2], //A 0 
  [[0], 3], //B 1
  [[0], 5], //C 2
  [[1], 3], //D 3
  [[2, 3], 4], //E 4
  */
  
];

let array2 = [
  /*
  [[], 2], //A 0 
  [[0], 2], //B 1
  [[0], 5], //C 2
  [[1], 4], //D 3
  [[2, 3], 4], //E 4
  */

 [[], 2], //A 0 Izrada koncepta svijeta
  [[0], 2], //B 1  Izrada koncepta likova
  [[0], 2], //C 2   Izrada koncepta mehanike
  [[1,2], 1], //D 3  Izrada GDD-a
  [[3], 3], //E 4   
  [[4], 1], //F 5
  [[5], 2], //G 6
  [[5], 2], //H 7
  [[5], 3], //I 8
  [[5], 3], //J 9
  [[5], 3], //K 10
  [[5], 108], //M 11
  [[7], 6], //N 12
  [[7], 5], //O 13
  [[8], 5], //P 14
  [[9, 10], 5], //A 15
  [[13], 2], //B 16
  [[12], 4], //C 17
  [[12], 8], //D 18
  [[15], 8], //E 19
  [[6, 15], 8], //F 20
  [[14], 1], //G 21
  [[14], 8], //H 22
  [[15], 4], //I 23
  [[15], 4], //J 24
  [[23], 3], //K 25  
  [[19, 17, 18], 12], //L 26
  [[24], 5], //M 27
  [[22], 84], //N 28
  [[20], 8], //O 29
  [[21], 10], //P 30
  [[20], 16], //G 31
  [[21], 18], //H 32
  [[21, 25], 8], //I 33
  [[21, 25], 8], //J 34
  [[25], 24], //K 35
  [[30], 8], //L 36
  [[16, 31, 29], 60], //M 37
  [[36], 12], //N 38
  [[31, 33, 34, 35, 27], 9], //O 39
  [[38, 32, 33, 34], 3], //P 40
  [[38], 9], //G 41
  [[43], 12], //H 42
  [[26, 29, 41, 40, 39], 18], //I 43
  [[43], 2], //J 44
  [[43], 8], //K 45
  [[43], 14], //L 46
  [[45, 42, 46], 2], //M 47
  [[37, 47, 44, 28, 11], 4], //N 48
];

document.getElementById("start").addEventListener('click', () => { document.getElementById("results").innerHTML = ""; start(array1);})
document.getElementById("start2").addEventListener('click', () => { document.getElementById("results").innerHTML = ""; start(array1); start(array2); 
  compareArrays(array1, array2);})

function init() {
  array1.forEach((item) => {
    //RP RZ KZ KP St
    item.push(0, 0, 0, 0, 0);
  });
  
  array2.forEach((item2) => {
    //RP RZ KZ KP St
    item2.push(0, 0, 0, 0, 0);
  });
}

function calculateRP_All(array) {
  return new Promise((resolve, reject) => {
    for (var i = 0; i < array.length; i++) {
      array[i][2] = calculateRP(i, array);
    }
    resolve(true);
  });
}

function calculateRP(id, array) {
  let arr = [];
  array[id][0].forEach((item) => {
    arr.push(calculateRP(item, array) + array[item][1]);
  });
  if (Math.max(...arr) != -Infinity) {
    return Math.max(...arr);
  }
  return 0;
}

function calculateRZ_All(array) {
  return new Promise((resolve, reject) => {
    array.forEach((item) => {
      item[3] = item[2] + item[1];
    });
    resolve(true);
  });
}

function calculateKZ_All(array) {
  return new Promise((resolve, reject) => {
    array[0][4] = calculateKZ(0, array);
    resolve(true);
  });
}

function calculateKZ(id, array) {
  let outs = [];
  let arr = array.filter((elem) => elem[0].includes(id));
  arr.forEach((item) => outs.push(calculateKZ(array.indexOf(item), array) - item[1]));
  let min = Math.min(...outs);
  if (min != Infinity) {
    array[id][4] = min;
    return array[id][4];
  } else {
    array[id][4] = array[id][3];
    return array[id][3];
  }
}

function calculateKP_All(array) {
  return new Promise((resolve, reject) => {
    array.forEach((item) => (item[5] = item[4] - item[1]));
    resolve(true);
  });
}
function calculateST_All(array) {
  return new Promise((resolve, reject) => {
    array.forEach((item) => (item[6] = item[4] - item[3]));
    resolve(true);
  });
}

function hasSuccessorInChainOrIsLast(index, array){
  let arr = array.filter((elem) => elem[0].includes(index));
  let notDoubled = true;
  arr.forEach((item)=>{
    item[0].forEach(id => {
      if(id != index && array[id][6] == 0){
        array[index][6] = -1;
        notDoubled = false;
      }
    })
  })
  return (arr.length == 0 || arr.find(elem => {return elem[6] == 0}) != undefined) && notDoubled
}

function compareArrays(array1, array2){
  let out = "Usporedba grafova: <br/>"
  out += `<br/><span style="padding-left: 2.1em;">Tr - Poč - Kr </span>`;
  for(let i = 0; i < array1.length; i++){
    if(JSON.stringify(array1[i]) !== JSON.stringify(array2[i])){
      out += `<br/>----AKTIVNOST  ${i+1}----` + "<br/>";
      out += "<span class='padded'>"+array1[i][1] + " - " + array1[i][2] + " - " + array1[i][4] + "</span><br/>";
      out += "<span class='padded'>"+array2[i][1] + " - " + array2[i][2] + " - " + array2[i][4] + "</span><br/>";
      out += "---------------------------" + "<br/>";
    }
  }
  document.getElementById("comparison").innerHTML = out;
}

let tableShown = false;
function showTable(){
  if(tableShown)
    document.getElementById("table").classList.remove("table_shown");
  else
    document.getElementById("table").classList.add("table_shown");
  
    tableShown = !tableShown;
}

init();
function start(array) {
  calculateRP_All(array)
    .then(calculateRZ_All(array))
    .then(calculateKZ_All(array))
    .then(calculateKP_All(array))
    .then(calculateST_All(array))
    .then(() => {
      let out = "";
      array.forEach((i) =>
      {
        out += "Aktivnost/RP/KP: "+
          (array.indexOf(i) + 1) + " " +
          //i[1] + " " +
          i[2] + " " +
          //i[3] + " " +
          //i[4] + " " +
          i[5] + "<br/>"
          //i[6] + "<br/>"
      })
      document.getElementById("table").innerHTML = out;
    }
    )
    .then(() => {
      let out = document.getElementById("results").innerHTML + "Kritični put:<br/>";
      let length = 0;
      let index = 0;
      let first = true;
      array.forEach((item) => {
        if (item[6] == 0 && hasSuccessorInChainOrIsLast(index, array)) {
          length += item[1];
          if (first) {
            out += (index+1);
            first = false;
          } else {
            out += " -> " + (index+1);
          }
        }

        index++;
      });
      out += "<br/><br/>Duljina kritičnog puta: " + length.toString() + "<br/><br/>";
      document.getElementById("results").innerHTML = out;
    });
}
