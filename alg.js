let array1 = [
  //prvi zadatak unos
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
  [[], 1], //0 
  [[0], 1], //1 
  [[1], 1], //2 
  [[1], 1], //3 
  [[2], 1], //4 
  [[3,4], 1], //5
  */
];

let array2 = [

  //šesti zadatak -> 5 dana u tjednu
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
  [[5], 108], //M 11
  [[7], 13], //N 12 
  [[7], 5], //O 13   
  [[8], 6], //P 14
  [[9, 10], 5], //A 15
  [[13], 4], //B 16
  [[12], 4], //C 17
  [[12], 8], //D 18
  [[15], 8], //E 19
  [[6, 15], 8], //F 20
  [[14], 1], //G 21    
  [[14], 8], //H 22
  [[15], 5], //I 23
  [[15], 6], //J 24
  [[23], 2], //K 25
  [[19, 17, 18], 12], //L 26
  [[24], 4], //M 27
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
  */

  
//šesti zadatak -> 7 dana u tjendu 
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
  [[5], 108], //M 11
  [[7], 14], //N 12
  [[7], 5], //O 13
  [[8], 6], //P 14
  [[9, 10], 5], //A 15
  [[13], 4], //B 16
  [[12], 4], //C 17
  [[12], 8], //D 18
  [[15], 8], //E 19
  [[6, 15], 8], //F 20
  [[14], 1], //G 21   // probat cemo 0 kasnije
  [[14], 8], //H 22
  [[15], 5], //I 23
  [[15], 6], //J 24
  [[23], 2], //K 25
  [[19, 17, 18], 12], //L 26
  [[24], 4], //M 27
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
*/

//deseti zadatak
  [[], 0],
  [[0], 2], //G 6 0
  [[0], 2], //H 7 1
  [[0], 3], //I 8 2
  [[0], 3], //J 9 3
  [[0], 3], //K 10 4
  [[2], 13], //N 12 5   
  [[2], 5], //O 13   6
  [[3], 6], //P 14   7
  [[4, 5], 5], //A 15 8
  [[7], 4], //B 16  9
  [[9], 8], //E 19  10
  [[1, 9], 8], //F 20  12
  [[8], 7], //G 21    --- //nedovršena aktivnost 13
  [[9], 5], //I 23  14
  [[9], 6], //J 24  15
  [[15], 4], //K 25  ---   //nedovršena aktivnost 16
  [[16], 3], //M 27    ---  //nedovršena aktivnost 17
  
/*
  [[], 1], //0 
  [[0], 1], //1 
  [[1], 1], //2 
  [[1], 1], //3 
  [[2], 1], //4 
  [[3,4], 1], //5
*/
];

document.getElementById("start").addEventListener('click', () => { document.getElementById("results").innerHTML = ""; start(array1);})
document.getElementById("start2").addEventListener('click', () => { document.getElementById("results").innerHTML = ""; start(array1); start(array2); 
  findSubgraph(array1, array2);})

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
  let old_out = out;
  for(let i = 0; i < array1.length; i++){
    if(array1[i][1] !== array2[i][1] || array1[i][2] !== array2[i][2] || array1[i][4] !== array2[i][4] ){
      out += `<br/>----AKTIVNOST  ${i+1}----` + "<br/>";
      out += "<span class='padded'>"+array1[i][1] + " - " + array1[i][2] + " - " + array1[i][4] + "</span><br/>";
      out += "<span class='padded'>"+array2[i][1] + " - " + array2[i][2] + " - " + array2[i][4] + "</span><br/>";
      out += "---------------------------" + "<br/>";
    }
  }
  if(out === old_out)
    out += "<br/><br/>Grafovi se podudaraju!"
  document.getElementById("comparison").innerHTML = out;
}

function DFS(array, curr_index, item){
  let not_checked_array1 = array[curr_index][7];
  
  if(array[curr_index][7].length == item[7].length)
    array[curr_index][9] = 2;
  else if(array[curr_index][7].length > item[7].length && array[curr_index][9] != 2)
    array[curr_index][9] = 1;
  not_checked_array1.forEach(elem => {
    item[7].forEach(elem2 => {
      DFS(array, elem, array2[elem2]);
    })
  })
  array[curr_index][7].forEach(next_index => DFS(array, next_index, item))
}

function findSubgraph(array1, array2){
  let index = 0;
  array1.forEach(item => {
    let new_arr = [];
    array1.filter(elem => elem[0].includes(index)).forEach(item => new_arr.push(array1.indexOf(item)));
    item.push(new_arr);
    index++;
  })
  index = 0;
  array2.forEach(item => {
    let new_arr = [];
    array2.filter(elem => elem[0].includes(index)).forEach(item => new_arr.push(array2.indexOf(item)));
    item.push(new_arr, 0);
    index++;
  })

  index = 0;
  let item = array2[0];
  array1.forEach(item2 => {
    DFS(array1, index, item);
    let sum = 0;
    array1.forEach(item3 =>{ 
      sum+=item3[9];
      item3[9] = 0;
      item3[8] = 0;
    });
    item2[10] = sum;
    index++;
  })
  let max = 0;
  let max_index = -1;
  index = 0;
  array1.forEach(item => {
    if(item[10] > max){
      max = item[10]
      max_index = index;
    }
    index++;
  })
  let arr_to_compare = array1.slice(max_index,max_index+array2.length);
  compareArrays(arr_to_compare, array2);
}
init();
findSubgraph(array1, array2);

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
