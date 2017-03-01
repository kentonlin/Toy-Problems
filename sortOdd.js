// sort odd digits in an array 
function sortArray(array) {
  var obj = {}, oddArray = [];

  if(!array.length){
    return array;
  }

  for(var i = 0; i < array.length; i++){
    if(array[i] === 0){
      continue;
    }
    if(array[i] % 2 !== 0){
      if(!obj.hasOwnProperty(array[i])){
        obj[array[i]] = [i];
      }else{
        obj[array[i]].push(i)
      }
    }
  }

  for(var key in obj){
    oddArray = oddArray.concat(obj[key]);
  }
  oddArray.sort((a,b) => a - b);

  for(var elem in obj){
    for(var j = 0; j < obj[elem].length; j++){
      obj[elem][j] = oddArray.shift();
    }
  }

  for(var k in obj){
    for(var idx = 0; idx < obj[k].length; idx++){
      array[obj[k][idx]] = +k
    }
  }
  return array;
}
sortArray([5, 3, 2, 8, 1, 4, 3]) // ANS: [1, 3, 2, 8, 5, 4]

// Better solution
// function sortArray(array) {
//   var odd = array.filter(elem => elem % 2 !== 0).sort((a, b) => a - b);
//   return array.map(elem => elem % 2 === 0 ? elem : odd.shift());
// }
