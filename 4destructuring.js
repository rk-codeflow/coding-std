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
const { firstName, club } = player;
console.log(firstName);
console.log(city);