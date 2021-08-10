module.exports = function reverse (n) {
 
  if (n < 0) {
    let arr = String(n).split('').reverse().slice(0,3).join('');
    return arr;
  } else {
      let arr = String(n).split('').reverse().join('');
      return arr;
  } 
}
