function solution(E, L) {
    var extra = 4, total = 0;
    var enter = E.split(":"), leave = L.split(":");
    var diff = leave[0] - enter[0];

    if(leave[1] > enter[1]){
      diff += 1;
    }else if(leave[1] < enter[1]){
      diff -= 1;
    }

    if(diff < 2){
      total = total + 2 + 3
    }else if(diff === 3) {
      total = (2 + 3 + ((diff -2) * extra))
    }else {
      total = (2 + 3 + ((diff -1) * extra))
    }

    return total
}
solution('10:21', '15:15')
// solution('10:00', '13:21')
// solution('09:42', '11:42')

// function takes in an entry time and exit time
// $2 initial cost upon entry $3 for the first hour $4 for every 
//    hour or partial hourafter that
