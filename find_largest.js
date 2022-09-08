function find_largest(n){
    let arr = [3,45,6,7,23,5,7,8];
    arr.sort(function( a , b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
});
    arr.reverse();
    
    console.log(arr[n-1])
}


find_largest(3)
