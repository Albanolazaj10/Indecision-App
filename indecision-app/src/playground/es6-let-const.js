var nameVar = 'Andrew';
nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);
 
var fullName = 'Andrew Mead';
if (fullName) {
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}

// function getPetName() {
//     const petName = 'Hal';
//     return petName;
// }
 
// const petName = getPetName();
// console.log(petName);

//Block scoping
//Not a function, just an 'if statement'

var fullName = 'Andreww Mead';

if(fullName) {
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}