function solution(A, K) {
    var array = A;
    var times = K;
    var stack = [];

    if(!array.length){
      return [];
    }

    while(times > 0){
      times -= 1;
      stack.push(array.pop());
      array.unshift(stack.shift())
    }

    return array;

}

// solution([], 3);
solution([3, 8, 9, 7, 6], 3);
