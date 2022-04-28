// https://www.codewars.com/kata/569d488d61b812a0f7000015
function dataReverse(data) {
    let a = [];
    for(let i = 0;i<data.length/8;i++)
    {
    a.push(data.slice(8*i,(8*i+8)).join(''))
    }
    a.reverse();
    let b = a.join().replace(/\,*/g, '').split('')
    return b.map(x=> parseInt(x))
  }