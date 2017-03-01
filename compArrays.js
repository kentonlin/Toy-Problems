function comp(array1, array2){
  var arrCopy1, arrCopy2, index, power;
  if(!Array.isArray(array1) || !Array.isArray(array2)){
    return false;
  }
  arrCopy1 = array1.concat();
  arrCopy2 = array2.concat();
  arrCopy1.map((elem,idx)=>{
    power = Math.pow(elem,2);
    if(arrCopy2.includes(power)){
      index = arrCopy2.indexOf(power);
      arrCopy2.splice(index, 1);
    }
  });
  return !arrCopy2.length ? true : false;
}

// a1 = [121, 144, 19, 161, 19, 144, 19, 11];
// a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
// comp(a1, a2);
// comp([78],[6085]);
comp([11, 10, 7, 93, 48, 60, 55, 48], [121, 100, 49, 8649, 2304, 3600, 3025, 2305])
