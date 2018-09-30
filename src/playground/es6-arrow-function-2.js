// 1.
// arguments object - no longer bound with arrow functions

const add = function (a, b) {
    console.log(arguments); // this prints arguments: Arguments(3) [55, 1, 1000, ...
    return a + b;
};

console.log(add(55, 1, 1000)); // argument 1000 is not used

// as arrow function
const addArrow = (a, b) => {
    // console.log(arguments); // this will return a reference error
    return a + b;
};

console.log(addArrow(55, 3));

// 2.
// this keyword - no longer bound

// with workaround:
// const user = {
//     name: 'Marie',
//     cities: ['Berlin', 'Wuerzburg', 'Brno', 'Olomouc', 'Ostrava', 'Dublin'],
//     printPlacesLived: function () {
//         const that = this; // the workaround for name inside of forEach function

//         this.cities.forEach(function (city) {
//             console.log(that.name + ' has lived in ' + city);
//         });
//     }
// };

// user.printPlacesLived();

// with arrow function
const user1 = {
    name: 'Marie',
    cities: ['Berlin', 'Wuerzburg', 'Brno', 'Olomouc', 'Ostrava', 'Dublin'],
    printPlacesLived: function () { // it cannot be an arrow function, otherwise we will not be able to access cities!
        this.cities.forEach((city) => { // the arrow function does not need a workaround if we want to access name
            console.log(this.name + ' has lived in ' + city);
        });
    }
};

// this will work too
const user2 = {
    name: 'Marie',
    cities: ['Berlin', 'Wuerzburg', 'Brno', 'Olomouc', 'Ostrava', 'Dublin'],
    printPlacesLived() { // this part is different!!!
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        });
    }
};

user2.printPlacesLived();

// this uses map
const user3 = {
    name: 'Marie',
    cities: ['Berlin', 'Wuerzburg', 'Brno', 'Olomouc', 'Ostrava', 'Dublin'],
    printPlacesLived() {
        const cityMessages = this.cities.map((city) => {
            return this.name + ' has lived in ' + city;
        });
        return cityMessages;
    }
};

console.log(user3.printPlacesLived());

// shorter syntax using map
const user4 = {
    name: 'Marie',
    cities: ['Berlin', 'Wuerzburg', 'Brno', 'Olomouc', 'Ostrava', 'Dublin'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city); // shorter!
    }
};