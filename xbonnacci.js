function Xbonacci(signature,n){
  var arrCopy = signature.concat(), step = signature.length, next;

  if(step > n){
    return signature.slice(0,n);
  }

  while(arrCopy.length < n){
    next = arrCopy.slice(-step).reduce((accum, elem, idx)=>{
      return accum + elem;
    },0)
    arrCopy.push(next);
  }
  return arrCopy
}
Xbonacci([1,0,0,0,0,0,1],10) // ANS: [1,0,0,0,0,0,1,2,3,6]
// Xbonacci([1,0,0,0,0,0,0,0,0,0],20)
// ANS: array = [1,0,0,0,0,0,0,0,0,0,1,1,2,4,8,16,32,64,128,256]

// slice off last 5 elements
// var array = [1,0,0,0,0,0,0,0,0,0,1,1,2,4,8,16,32,64,128,256];
// array.slice(-5)
// slice off last 10
// array = [1,2,3];
// array.slice(-10);
