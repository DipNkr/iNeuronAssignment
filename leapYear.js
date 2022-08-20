let givenYear = 2025;

const checkLeapYear = (givenYear)=> givenYear % 100 === 0 && givenYear % 400 === 0 || givenYear % 4 === 0 && givenYear % 100 !== 0


let result = checkLeapYear(givenYear);
console.log(result);
