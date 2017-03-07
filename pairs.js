function processData(length, difference, array) {
    // var inputArray = input.split("\n");
    // var length = +inputArray[0].split(" ")[0];
    // var difference = +inputArray[0].split(" ")[1];
    // var array = inputArray[1].split(" ").map(Number).sort((a,b)=>a-b);
    array = array.sort((a,b)=> a-b);
    var result = 0;

    /* INITIAL SOLUTION DOESNT PASS ALL TESTS */
    for(var i = 0; i < array.length; i++){
        for(var j = i+1; j < array.length; j++){
            var diff = array[j] - array[i];
            if(diff === difference){
                result+=1;
            }
            if(diff > difference){
                break;
            }
            if(diff < difference){
                continue;
            }
        }
    }
    console.log(result);

    /* WHILE LOOP SOLUTION
    var i=0,j=1,count=0,nums = array,k=difference;
    while(j < length) {
        var diff = nums[j] - nums[i];
        if (diff === k) {
            count++;
            j++;
        } else if (diff > k) {
            i++;
        } else if (diff < k) {
            j++;
        }
    }
    console.log(count)*/
}

processData(5,2,[1,5,3,4,2])
