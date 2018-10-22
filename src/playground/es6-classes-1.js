class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi. I am ${this.name}!`
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, city) {
        super();
        this.city = city;
    }
    getGreeting() {
        let greeting = super.getGreeting();

        if (this.city) {
            return `${greeting}. I'm visiting from ${this.city}.`;
        }

        return greeting;
    }
}

const me = new Traveler('Marie Dedikova', 'Berlin');
console.log(me.getGreeting());

const other = new Student();
console.log(other.getGreeting());