// inizio programmazione 
// -prima formula per stampare i NUMERI 
// -seconda controllare se il numero è divisibile per 3-5 o per entrambi
// terza sostituire i numeri con fizz,buzz e fizzbuzz

// formula per stampare i numeri

for(let i = 1; i <= 100; i++) 
    
 {

// il numero se è divisibile per 3 e 5 e stampare fizzbuzz  
    
let risultato = (i);
 if (i % 3 === 0 && i % 5 === 0) {
   
   risultato= "FizzBuzz";
   
 }
 // il numero se è divisibile per 3
 
 else if (i % 3 === 0 ) {
    
   risultato="Fizz";
}
// il numero se è divisibile per 5

 else if ( i % 5 === 0) {
    
      
    risultato="Buzz";
 }

 
    console.log(risultato);

 
    

}
   

