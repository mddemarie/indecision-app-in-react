var nameVar = 'Marie';
var nameVar = 'Mike'; // the nameVar will be overwritten but we do not get any error that the var was already defined above
console.log('nameVar', nameVar);

let nameLet = 'Jen';
// let nameLet = 'Julie'; this will output an error with Babel
nameLet = 'Julie'; // this will work though
console.log('nameLet', nameLet);

const nameConst = 'Frank';
// const nameConst = 'John'; this will output an error with Babel
// nameConst = 'John'; this will show the error - 'nameConst' is read-only
console.log('nameConst', nameConst);

// variables in and out of SCOPE
function getPetName() {
    var petName = 'Hal';
    return petName;
}

const petName = getPetName();
console.log(petName);

// Block Scoping
const fullName = 'Marie Dedikova';
let firstName; // this makes sure that we can use let instead of var inside of IF block and reuse the variable outside of IF block

if (fullName) {
    firstName = fullName.split(' ')[0] // this will not work if we define the variable with let or const and then reuse the variable outside
    console.log(firstName)
}

console.log(firstName)

// const and let variables are block level scoped -> not possible to access them out of block scope
// we try to avoid var variables, though!
// we never user VAR