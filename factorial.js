
const factorial = (num) => {
    let result = 1;
    while(num){
        result *=num;
        num--;
    }
    return result;
}

console.log(factorial(10))
