function array_diff(a, b) {
  // refactor
  return a.filter((elem, idx) => {
    if(b.indexOf(elem) === -1){
      return elem;
    }
  })

  //inital solution
  // var index;
  // for(var i = 0; i < b.length; i++){
  //   if(a.includes(b[i])){
  //         console.log(a)
  //     while(a.indexOf(b[i]) !== -1){
  //       a.splice(a.indexOf(b[i]), 1)
  //     }
  //   }
  // }
  // return a
}
array_diff([1,2,2,2,3,4,5],[2,3])
// array_diff([1,3,3,3,4],[3])
