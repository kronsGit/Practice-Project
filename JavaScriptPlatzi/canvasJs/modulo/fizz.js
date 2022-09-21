let num=100;

for(i=1;i<=100;i++){
    if(esDivisible(i,3)){
        document.write(`Fizz `);   
    }

    if(esDivisible(i,5)){
        document.write(`Buzz`);   
    }

    if(!esDivisible(i,3) && !esDivisible(i,5)){  // "!esDivisible esto significa que no es divisible"
        document.write(i);
    }
  

    document.write("<br>")
   
}

function esDivisible(num,divisor){
    if(num%divisor == 0){
        return true;   //Si un numero es divisible manda true
    }else{
        return false; //Si un numero no es divisible manda false
    }
    

}