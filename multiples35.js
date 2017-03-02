function solution(number){
  var count = 0, result = [];
  while(count < number){
    if(count % 3 === 0){
      result.push(count);
    }else if(count % 5 === 0){
      result.push(count);
    }
    count++;
  }
  return result.reduce((accum,elem,idx)=>{
    return accum + elem
  },0)
}
// variable count which is 0
// while count is less than number
  // if count divisible by 3
    // push to result array
  // if count divisible by 5
    // push to push to result array
// reduce result array 
