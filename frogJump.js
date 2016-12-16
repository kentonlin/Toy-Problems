function solution(X, Y, D) {
  var count = 0;

  while(X < Y){
    X += D;
    count +=1;
  }
  return count;
}

solution(10,85,30);
