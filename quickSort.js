function processData(array, length) {

  // remove duplicates
  // var duplicates = [];

  // array.forEach((element, idx)=>{
  //   if(!duplicates.includes(element)){
  //     duplicates.push(element)
  //   }
  // });
  // array = duplicates;
  // length = duplicates.length;

  var result = [];

  function quickSort(arr, low, high){
    var pivot;
    if(low < high){
      pivot = high;
      partitionIndex = partition(arr, pivot, low, high);
      result.push(arr + '\n')
      quickSort(arr, low, partitionIndex -1);
      quickSort(arr, partitionIndex + 1, high);
    }
    return arr
  }
  function partition(arr, pivot, low, high){
    var pivotValue = arr[pivot];
    var partitionIndex = low;
    for(var i = low; i < high; i++){
      if(arr[i] < pivotValue){
        swap(arr, i, partitionIndex);
        partitionIndex++;
      }
    }
    swap(arr, high, partitionIndex);
    return partitionIndex;
  }
  function swap(arr, i, j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  quickSort(array, 0, length -1);

  return array
}
processData([1,3,9,8,2,7,5], 7)
processData([9,9,8,6,7,3,5,4,1,2],10)
