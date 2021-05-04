//arguments object - no longer bound with arrow functions

const add = (a, b) => {
    //console.log(arguments); ===> arguments doesn't work on an arrow functions
    return a + b;
};
console.log(add(55, 1, 1001));

//this keyword - no longer bound


const user = {
    name: 'Andrew',
    cities:['Phili', 'NY', 'Dublin'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);  
      
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });
    }
};
console.log(user.printPlacesLived());
// user.printPlacesLived(); per metoden 'forEach'


//Challenge
const multiplier = {
    numbers: [1, 2 ,3],
    multiplyBy: 5,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());