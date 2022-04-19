// For/Break/Continue	
// Utilize a estrutura de repetição for para 
// imprimir no console conforme instruções:

// a) números de 1 a 50  
// b) console.log("Pare no 25")
// c) quando chegar no número 10 pule a instrução|

  let number = 0;
  for(let number = 1; number <=50; number++) {
    console.log(`${number}`)
}

  while(number < 50) {

  number += 1;
  
  if(number === 10) {
    console.log("Pule o 10");
    continue;
  }


  else if(number === 25) {
    console.log("Pare no 25")
    break;
  }  

  console.log(number);

}

