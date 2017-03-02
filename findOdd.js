function findOdd(A) {
  var obj = {}; var copyArr = A.concat();

  for(var i = 0; i < copyArr.length; i++){
    if(!obj.hasOwnProperty(copyArr[i])){
      obj[copyArr[i]] = 0;
    }
    if(obj.hasOwnProperty(copyArr[i])){
      obj[copyArr[i]] = obj[copyArr[i]] += 1;
    }
  }

  for(var key in obj){
    if(obj[key] % 2 !== 0){
      return +key;
    }
  }
  return 0;
}
