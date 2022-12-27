// Object Constructor

// Creating an object
const house = new House();

// Lets create a constructor function
function House() {
  // adding properties
  this.name = 'Rosewood',
  this.built = 1998;
}

console.log(house);
console.log(house.name);

// Object literal
const user = {
  name: 'John',
  age: 42
}

console.log(user.name)
console.log(user.age);