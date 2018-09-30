function square (x) {
    return x * x;
};

console.log(square(3));

// const squareArrow = (x) => {
//     return x * x;
// };

// Arrow function expression syntax
const squareArrow = (x) => x * x;

console.log(squareArrow(8));

// Code Challenge:
const getFirstName = (fullName) => {
    const firstName = fullName.split(' ')[0];
    return firstName;
  };
  
  console.log(getFirstName('Marie Dedikova'));
  
  // Arrow function - short syntax
  const getFirstNameShort = (fullName) => fullName.split(' ')[0];
  console.log(getFirstNameShort('John Smith'));
