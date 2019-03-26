function isPrime(num) {
  for(let i = 2; i < num; i++){
    if(num % i == 0){
      return false;
    }
  }
  return true;
}

function sumPrimes(num) {
  let ans = 0;
  for(let i = 2; i <= num; i++){
    if(isPrime(i)){
      ans += i;
    } 
  }
  console.log(ans);
  return ans;
}

sumPrimes(977);