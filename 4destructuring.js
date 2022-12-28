const numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]);

// destructuring an array
const [first, second, third] = numbers;
console.log(first);

// destructuring an object
const player = {
  firstName: 'Lebron',
  lastName: 'James',
  club: 'LA Lakers',
  address: {
    city: 'Los Angeles'
  }
};

// console.log(player.name);
// console.log(player.address.city);

// destructuring
const { firstName, club, address: {city} } = player;
console.log(firstName);
console.log(city);
