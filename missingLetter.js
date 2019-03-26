var alphabet = "abcdefghijklmnopqrstuvwxyz";

function fearNotLetter(str) {
  var missing = "";

  for(let i = 0; i < alphabet.length; i++){
    if(alphabet[i] == str.charAt(0)){
      let count = i;
      for(let j = 0; j < str.length; j++){
          if(str.charCodeAt(j) !== alphabet.charCodeAt(count)){
            missing = String.fromCharCode(alphabet.charCodeAt(count));
            return missing
          }
          count++;
      }
    }

  }
  


  return;
}

fearNotLetter("bcdf");