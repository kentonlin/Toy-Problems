/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let xString = x.toString(), reverse = "", result = false;

    for(var i = xString.length -1; i >= 0; i--){
        reverse += xString[i];
    }
    xString === reverse ? result = true : result = false;
    return result;
};
