var threeSum = function(nums) {
    var result = [];
    nums = nums.sort((a,b) => a - b);

    for(var i = 0; i < nums.length; i++){
      if(nums[i -1] !== undefined && nums[i -1] === nums[i]){
        continue;
      }
      var current = nums[i], next = i +1, last = nums.length -1;
      while(last > next){
        if(current + nums[next] + nums[last] === 0){
          result.push([current, nums[next], nums[last]]);
          while(last > next && nums[last] === nums[last -1]){
              last--;
          }
          while(last > next && nums[next] === nums[next +1]){
              next++;
          }
          last--;
          next++;
        }else if(current + nums[next] + nums[last] > 0){
          last--;
        }else{
          next++;
        }
      }
    }
    // take out inner while loops for this return to find unique sub arrays.
    // return result.map((elem)=> JSON.stringify(elem)).filter((val, idx, self)=> self.indexOf(val) === idx).map((elem)=> JSON.parse(elem));
    return result
};
