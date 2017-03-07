// complete the function
function solution(string) {
  var stringArr = string.split("");
  var result = "";
  stringArr.forEach((elem, idx)=>{
    if(elem === elem.toUpperCase()){
      result += " ";
    }
    result += elem;
  })
  return result;
// REGEX
//     return s.split(/(?=[A-Z])/).join(' ');
}
solution("camelCase");
