function sumFibs(num) {
  let n1 = 0;
  let n2 = 1;
  let fib = 0;
  let alteredNum = 0;

  for(let i = fib; i <= num; (i = n1 + n2)){
    fib = n1 + n2;
    n2 = n1;
    n1 = fib;    
    if(fib % 2 !== 0){ 
      alteredNum += fib; 
    }
  }
  console.log(alteredNum);
  return alteredNum;
}

sumFibs(10);