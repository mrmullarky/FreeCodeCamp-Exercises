function reverseString(str){
  let arr = str.split("");
  let reverse = arr.reverse();
  let final = reverse.join("");
  return final;
}

function palindrome(str) {
  let newStr = str.toLowerCase().replace(/[^A-Za-z0-9]/g,'');
  let reversed = reverseString(newStr);
  
  console.log(newStr);
  console.log(reversed);
  
  for(let i = 0; i < newStr.length; i++){
    if(newStr[i] !== reversed[i]){
      return false;
    }
  }
  
  return true;
}



palindrome("1 eye for of 1 eye.");