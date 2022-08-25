function CheckSpecial(num){
    let result = 0;
    let temp = num.toString();
    for (let i of temp){
        let fac =1;
        for (let j=1; j<=parseInt(i); j++){
            fac*=j;
        }
        result+=fac;
    }
    if(result===num){
        console.log("Special Number")
    }
    else{
        console.log("Not a Special Number")
    }
}


CheckSpecial(145);
