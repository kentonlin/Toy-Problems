function solution(N) {
    var binaryArr = N.toString(2).split("");
    var length = 0;
    var max = 0;
    var counting = false;

    for(var i = 0; i < binaryArr.length; i++){
      if(binaryArr[i] === "1"){
        if(length > max){
          max = length;
        }
        counting = true;
        length = 0;
      }else if(counting) {
        length += 1;
      }
    }
    
    return max;

}

solution(1041)
