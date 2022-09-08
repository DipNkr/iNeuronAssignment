class Rectangle{
    constructor(l,b){
        this.l = l;
        this.b = b;
    }
    
    area(){
        let result = this.l*this.b;
        console.log(result);
    }
}

class Square extends Rectangle{
    constructor(l,b){
        super(l,b);
    }
}



let obj1= new Rectangle(5,7);
obj1.area();

let obj2= new Square(9,9);
obj2.area();



