tribonacci = function(array, n){
  var copyArr = array.concat(), idx = 2, next;

  while(idx < n -1){
    if(copyArr.length < 3){
      next = copyArr[0] + copyArr[1]
      copyArr.push(next);
    }
    if(copyArr.length >= 3){
      next = copyArr[idx -2] + copyArr[idx -1] + copyArr[idx];
      copyArr.push(next);
    }
    idx++
  }
  return copyArr
}
var arr = [1,1,1] // ANS: [1,1,1,3,5,9,17,31]
tribonacci(arr, 8)
