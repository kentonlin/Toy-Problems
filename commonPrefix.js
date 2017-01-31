var longestCommonPrefix = function(strs) {
  if(!strs.length){
    return "";
  }else if(strs.length < 2){
    return strs[0];
  }
  var array = strs.concat().sort();
  var str1 = array[0];
  var str2 = array[array.length -1];
  var length;
  var result = ""

  str1.length >= str2.length ? length = str1.length : length = str2.length;
  if(!length){
    return "";
  }
  for(var i = 0; i < length; i++){
    if(str1[i] === str2[i]){
      result += str1[i];
    }else{
      return result
    }
  }
  return result
};
longestCommonPrefix(["geeksforgeeks", "geeks", "geek", "geezer", "gey"]);

//
// function longestCommonPrefix(strings){
//     if(!strings || strings.length === 0){
//         return null;
//     }
//     var prefix = '',
//         characters = strings[0].split(''),
//         i, j;
//
//     for(i = 0; i < characters.length; i++){
//         var isPrefix = true,
//             character = characters[i];
//
//         for(j = 0; j < strings.length; j++) {
//             var string = strings[j];
//
//             isPrefix = isPrefix &&
//                 (string.length > i && string[i] === character);
//         }
//
//         if(isPrefix) {
//             prefix += character;
//         } else {
//             return prefix;
//         }
//     }
// }
//
// longestCommonPrefix(["geeksforgeeks", "geeks", "geek", "geezer", "gey"]);
