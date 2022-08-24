function CheckPrime(n){
    if (n <= 1)
        return false;
 
    for (let i = 2; i < n; i++)
        if (n % i == 0)
            return false;
  
    return true;

}


function PrimeFactorial(x,y){
    for (let i = x; i<=y; i++){
        result = '';
        if(CheckPrime(i)){
            for (j=i; j>0; j--){
                result+= j +" "
            }
            console.log(result)
        }
    }
}

PrimeFactorial(1,100)
