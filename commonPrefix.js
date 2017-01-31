var longestCommonPrefix = function(strs) {
  var array = strs.concat().sort();
  var str1 = array[0];
  var str2 = array[array.length -1];
  var length;

  str1.length > str2.length ? length = str1.length : length = str2.length;

  for(var i = 0; i < length; i++){
    if(str1[i] !== str2[i]){
      return str1.slice(0, i);
    }
  }
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
