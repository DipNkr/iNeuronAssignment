function computeDash(num){
    let arr = String(num).split("").map(Number);
    let result =''
    result+=arr[0]
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2==0 && arr[i+1]%2==0){
            result+="-"
        }
        if(i<arr.length-1){
            result+=arr[i+1]
        }
        
    }
    
    return result
}



console.log(computeDash(256666532648))//256-6-6-6532-6-4-8
