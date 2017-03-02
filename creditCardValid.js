// Luhn algorithm itself is quite simple and straightforward. Starting at the last digit in the identifier (the check digit), double every other digit’s value. If any of the doubled digits are greater than nine, then the number is divided by 10 and the remainder is added to one. This value is added together with the appropriate values for every other digit to get a sum. If this sum can be equally divisible by 10, then the number is valid. The check digit serves the purpose of ensuring that the identifier will by equally divisible by 10. This can be written in JavaScript as follows:

function validate(string){
  var array = string.split('');
  var resultArr = [];

  for(var i = 0; i < array.length; i++){
    if(array.length % 2 === 0){
      if(i % 2 === 0){
        if(+array[i] * 2 > 9){
          resultArr.push((+array[i] * 2) - 9);
        }else {
          resultArr.push(+array[i] * 2);
        }
      }else{
        resultArr.push(+array[i]);
      }
    }else if(array.length % 2 !== 0){
      if(i % 2 !== 0){
        if(+array[i] * 2 > 9){
          resultArr.push((+array[i] * 2) - 9);
        }else{
          resultArr.push(+array[i] * 2);
        }
      }else{
        resultArr.push(+array[i]);
      }
    }
  }
  console.log(resultArr);
  var sum = resultArr.reduce((accum, elem, idx)=>{
    return accum + elem
  },0);

  console.log(sum);

  if(sum % 10 === 0){
    return true
  }else{
    return false
  }
  // var array = string.split("");
  // var i = array.length -1;
  // var sum = 0;
  // var doubled = false;

  // while(i >= 0){
  //   var number = +array[i];
  //   if(doubled){
  //     number *= 2;
  //     if(number > 9){
  //       number -= 9;
  //     }
  //   }
  //   sum += number;
  //   doubled = !doubled;
  //   i -=1;
  // }
  // return sum % 10 === 0;
}
validate("4012888888881881");
validate("4111111111111111");
validate("4222222222222");
validate("4111111111111112");
validate("4111111111111111");
