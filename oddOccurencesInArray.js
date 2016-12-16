function solution(A) {
  var array = A.slice();
  var stack = [];

  for(var i = 0; i < array.length; i++){
    if(stack.includes(array[i]) === false){
      stack.push(array[i]);
    }else {
      stack.splice(stack.indexOf(array[i]), 1);
    }
  }
  return Number(stack.join(""));

}
solution([1,5,1,5,3,5,5]);

// REFACTOR

function solution(A) {
    var odd;
    for(var i = 0; i < A.length; i++){
        odd ^= A[i];
    }
    return odd;
}
