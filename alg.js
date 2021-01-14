let array = [
  /*
  [[], 3], //A 0 
  [[0], 2], //B 1
  [[0], 1], //C 2
  [[1, 2], 3], //D 3
  [[1, 2], 1], //E 4
  [[4], 1], //F 5
  [[3, 5], 1], //G 6
*/

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

  /*

  [[], 2], //A 0 
  [[0], 3], //B 1
  [[0], 5], //C 2
  [[1], 3], //D 3
  [[2, 3], 4], //E 4
  */
];

function init() {
  array.forEach((item) => {
    //RP RZ KZ KP St
    item.push(0, 0, 0, 0, 0);
  });
}

function calculateRP_All() {
  return new Promise((resolve, reject) => {
    for (var i = 0; i < array.length; i++) {
      array[i][2] = calculateRP(i);
    }
    resolve(true);
  });
}

function calculateRP(id) {
  let arr = [];
  array[id][0].forEach((item) => {
    arr.push(calculateRP(item) + array[item][1]);
  });
  if (Math.max(...arr) != -Infinity) {
    return Math.max(...arr);
  }
  return 0;
}

function calculateRZ_All() {
  return new Promise((resolve, reject) => {
    array.forEach((item) => {
      item[3] = item[2] + item[1];
    });
    resolve(true);
  });
}

function calculateKZ_All() {
  return new Promise((resolve, reject) => {
    array[0][4] = calculateKZ(0);
    resolve(true);
  });
}

function calculateKZ(id) {
  let outs = [];
  let arr = array.filter((elem) => elem[0].includes(id));
  arr.forEach((item) => outs.push(calculateKZ(array.indexOf(item)) - item[1]));
  let min = Math.min(...outs);
  if (min != Infinity) {
    array[id][4] = min;
    return array[id][4];
  } else {
    array[id][4] = array[id][3];
    return array[id][3];
  }
}

function calculateKP_All() {
  return new Promise((resolve, reject) => {
    array.forEach((item) => (item[5] = item[4] - item[1]));
    resolve(true);
  });
}
function calculateST_All() {
  return new Promise((resolve, reject) => {
    array.forEach((item) => (item[6] = item[4] - item[3]));
    resolve(true);
  });
}

init();
function start() {
  console.clear();
  calculateRP_All()
    .then(calculateRZ_All())
    .then(calculateKZ_All())
    .then(calculateKP_All())
    .then(calculateST_All())
    .then(() =>
      array.forEach((i) =>
        console.log(
          String.fromCharCode(array.indexOf(i) + 65),
          i[1],
          i[2],
          i[3],
          i[4],
          i[5],
          i[6]
        )
      )
    )
    .then(() => {
      let out = "Kritični put:<br/>";
      let length = 0;
      let index = 0;
      let first = true;
      array.forEach((item) => {
        if (item[6] == 0) {
          length += item[1];
          if (first) {
            out += String.fromCharCode(index + 65);
            first = false;
          } else {
            out += " -> " + String.fromCharCode(index + 65);
          }
        }

        index++;
      });
      out += "<br/><br/>Duljina kritičnog puta: " + length.toString();
      document.getElementById("results").innerHTML = out;
    });
}
