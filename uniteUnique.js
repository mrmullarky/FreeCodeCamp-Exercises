function uniteUnique(...arr) {
  let spreadArr = [].concat(...arr);
  let res = [];

  for(let i = 0; i < spreadArr.length; i++){
    if(!res.includes(spreadArr[i])){
      res.push(spreadArr[i]);
    }
  }
  return res;
}

uniteUnique([1, 3, 5, 6, 2], [5, 2, 1, 4], [2, 1]);