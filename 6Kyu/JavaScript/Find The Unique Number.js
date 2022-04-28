// https://www.codewars.com/kata/585d7d5adb20cf33cb000235
function findUniq(arr) {
    let a = arr.map((v, i, a) => a.indexOf(v) == a.lastIndexOf(v) ? v :  '')
    return parseFloat(a.join(''))
  }