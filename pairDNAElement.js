function pairElement(str) {

  let arr = str.split('');
  let newArr = [];
  let gPair = ["G","C"];
  let cPair = ["C","G"];
  let aPair = ["A","T"];
  let tPair = ["T","A"];

  for(let i = 0; i < arr.length; i++){
    switch(arr[i]){
      case "G":
        newArr.push(gPair);
        break;
      case "C":
        newArr.push(cPair);
        break;
      case "A":
        newArr.push(aPair);
        break;
      case "T":
        newArr.push(tPair);
        break;
    }
  }
  
  return newArr;
}

pairElement("GCG");