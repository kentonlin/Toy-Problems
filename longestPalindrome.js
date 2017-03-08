function longestPalindrome(s){
  var string = "";
  var longest = "";

  function isPalindrome(string){
    var reverse = "";
    for(var x = string.length -1; x >= 0; x--){
      reverse += string[x];
    }
    if(reverse === string){
      return true
    }
    return false
  }

  for(var i = 0; i < s.length; i++){
    for(var j = 0; j < s.length; j++){
      var result = s.slice(i, j+1)
      if(isPalindrome(result) && result.length > longest.length){
        longest = result;
      }
    }
  }
  return longest.length;
}
