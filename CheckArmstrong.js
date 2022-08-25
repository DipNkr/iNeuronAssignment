function Armstrong(num){
    let result = 0;
    let temp = num.toString();
    for (let i of temp){
        result+=parseInt(i) * parseInt(i) * parseInt(i)
    }
        
    if(result===num){
        console.log("Armstrong Number")
    }
    else{
        console.log("Not a Armstrong Number")
    }
}


Armstrong(58);
