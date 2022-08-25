
let cnt = 1;
let res = []
for (let x=1; x<=11; x++){
    if(res.length===cnt){
        console.log(...res);
        res = [];
        res.push(x);
        cnt++;
    }
    else{
        res.push(x);
    }
}

/*
1 
2 3 
4 5 6 
7 8 9 10
*/
