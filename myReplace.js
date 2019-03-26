function isUpper(character) {
  return (character === character.toUpperCase()) && (character !== character.toLowerCase());
}

function myReplace(str, before, after) {

  let arr = str.split(' ');

  for(let i = 0; i < arr.length; i++){
    if(arr[i] === before){
      let ch = arr[i].toString().charAt(0);
      if(isUpper(ch)){
        arr[i] = after.charAt(0).toUpperCase() + after.substr(1);
      } else {
      	arr[i] = after;
      }
  	}
  }
	
	str = arr.join(' ');

  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");