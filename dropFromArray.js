function dropElements(arr, func) {
  // Drop them elements.
  let newArr = [];

  for(let i = 0; i < arr.length; i++){
    if(func(arr[i])){
      for(let j = i; j < arr.length; j++){
        newArr.push(arr[j]);
      }
      break;
    }
  }
  console.log(newArr);
  return newArr;
}