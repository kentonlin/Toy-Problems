function processData(input) {
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var inputArr = input.toLowerCase().split('');

  for(var i = 0; i < inputArr.length; i++){
    if(letters.includes(inputArr[i])){
        letters = letters.replace(inputArr[i], "");
    }
  }
  console.log(letters)

  if(!letters.length){
    return "pangram"
  }

  return "not pangram"
}
processData("We promptly judged antique ivory buckles for the next prie");
