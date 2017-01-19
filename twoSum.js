var twoSum = function(nums, target) {
    // Refactor
    // Time complexity = linear O(n)
    var map = {};

    for(var i = 0; i < nums.length; i++){
        var diff = target - nums[i];
        if(map[diff] >= 0){
            return [map[diff], i];
        }else {
            map[nums[i]] = i;
        }
    }
    // First attempt
    // Time complexity = O(n^2)
    // var result = [];
    // for(var i = 0; i < nums.length; i++){
    //     for(var idx = i +1; idx < nums.length; idx++){
    //         if(nums[i] + nums[idx] === target){
    //             result.push(i, idx);
    //             return result
    //         }
    //     }
    // }
    // return result;
};
