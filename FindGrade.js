
function FindGrade(mark){
    switch(true){
        case(mark >=90 && mark<=100):
            console.log("Grade S");
            break;
        case(mark >=80 && mark<=89):
            console.log("Grade A");
            break;
        case(mark >=70 && mark<=79):
            console.log("Grade B");
            break;
        case(mark >=60 && mark<=69):
            console.log("Grade C");
            break;
        case(mark >=50 && mark<=59):
            console.log("Grade D");
            break;
        case(mark >=40 && mark<=49):
            console.log("Grade E");
            break;
        case(mark >=0 && mark<=39):
            console.log("Work Hard, You Failed");
            break;
        default:
            console.log("Invalid marks");
            break;
        
    }
}

FindGrade(74)
