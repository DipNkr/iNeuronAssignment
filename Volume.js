class Cylinder{
    constructor(radius,height){
        this.radius = radius;
        this.height = height;
    }
    
    getVolume(){
        let result = 3.14159*this.radius*this.radius*this.height;
        console.log(result.toFixed(4));
    }
}

class Sphere{
    constructor(radius){
        this.radius = radius;
    }
    
    getVolume(){
        let result = ((4/3)*3.14159*this.radius*this.radius*this.radius);
        console.log(result.toFixed(4));
    }
}

class Cone{
    constructor(radius,height){
        this.radius = radius;
        this.height = height;
    }
    
    getVolume(){
        let result = (3.14159*this.radius*this.radius*this.height)/3;
        console.log(result.toFixed(4));
    }
}


let obj1= new Cylinder(5,7);
obj1.getVolume();//549.7782

let obj2= new Sphere(13);
obj2.getVolume();//9202.7643

let obj3= new Cone(5,7);
obj3.getVolume();//183.2594



