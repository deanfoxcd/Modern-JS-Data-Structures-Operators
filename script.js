'use strict';

// Coding Challenge #1 Data
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

// ES6 Enhanced Object Literal
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // Only need to write the object name in ES6 if the names are the same
  openingHours,

  // Functions before ES6
  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },

  // Functions after ES6
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Building your pasta with ${ing1}, ${ing2}, and ${ing3}`);
  },

  orderPizza: function (mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  },
};

// **MAPS**
/*
const rest = new Map();
rest.set('name', "Nicoletta's");
rest.set(1, 'Crossville, TN');
rest.set(2, 'Knoxville, TN');

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed :(');

console.log(rest);

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);
// rest.clear()
*/

// **SETS**
/*
// Groups unique values passed into it/eliminates duplicates

const ordersSet = new Set([
  'pizza',
  'pasta',
  'risotto',
  'pizza',
  'pasta',
  'pasta',
]);

console.log(ordersSet); // Set(3) {'pizza','pasta','risotto'}
console.log(new Set('Dean')); // Set(4) {'D','e','a','n'}
console.log(ordersSet.size); // 3
console.log(ordersSet.add('bread'));
console.log(ordersSet.has('pizza')); // true
console.log(ordersSet.has('coke')); // false
ordersSet.delete('bread');
console.log(ordersSet);
// Sets don't have indexes but are iterable

for (const set of ordersSet) {
  console.log(set);
}

// Example
const staff = [
  'waiter',
  'chef',
  'waiter',
  'chef',
  'cleaner',
  'manager',
  'cleaner',
];

const staffUnique = new Set(staff);
// const staffUnique = [...new Set(staff)]; // To make an array from a set in one line
console.log(staffUnique);

const staffArr = [...staffUnique];
console.log(staffArr);

console.log(new Set('Dean').size); // 4
*/

// **CODING CHALLENGE #2**
/*
// 1
for (const [k, v] of game.scored.entries()) {
  console.log(`Goal number ${k + 1} scored by ${v}`);
}

// 2
let oddsSum = 0;
const odds = Object.values(game.odds);
for (const odd of odds) {
  oddsSum += odd;
}
const oddsAve = oddsSum / odds.length;
console.log(oddsAve);

// 3
const gameOdds = Object.entries(game.odds);

for (const [k, v] of gameOdds) {
  k === 'x'
    ? console.log(`Odds of a draw: ${v}`)
    : console.log(`Odds of victory for ${game[k]}: ${v}`);
}

// 4
const scorers = {};

for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);

// My attempt
// let goalsScored = 0;

// for (let [k, v] of game.scored.entries()) {
//   k = v;
//   v = goalsScored + 1;
//   console.log(k, v);
// }
*/

// ** LOOPING OBJECTS**
/*
// Property Names
const properties = Object.keys(openingHours);

let openStr = `We are open on ${properties.length} days: `;
for (const day of Object.keys(openingHours)) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property Values
const propValues = Object.values(openingHours);

// Entire Object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
  */

// **OPTIONAL CHAINING**
/*
// Without
if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

// console.log(restaurant.openingHours.mon.open); // Error. Can't read undefined.open

// With
console.log(restaurant.openingHours?.mon?.open); // Undefined instead of error

const days = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`The restaurant opens at ${open} on ${day}`);
}

// On methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

// On arrays
const users = [
  {
    name: 'Dean',
    email: 'dean@hello.com',
  },
];

console.log(users[0]?.name ?? 'User does not exist');
*/

// **FOR/OF LOOP**
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// Logs each item in the array
// for (const item of menu) console.log(item);

// Logs each item but with the index
// for (const item of menu.entries()) {
//   console.log(item);
// }

// Logs each item and numbers the list from 1
// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }

// A better way of doing above
for (const [i, el] of menu.entries()) {
  // destructures the menu.entries output. i is index, el is menu item
  console.log(`${i + 1}: ${el}`);
}
  */

// **CODING CHALLENGE 1**
/*
const [players1, players2] = game.players;

// console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

const playersFinal = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(playersFinal);

// const { team1, x: draw, team2 } = game.odds; // My solution
const {
  odds: { team1, x: draw, team2 },
} = game; // Course solution
// console.log(team1, team2, draw);

const printGoals = function (...player) {
  console.log(`${player.length} goals were scored by ${player}.`);
};
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(...game.scored);

team1 < team2 && console.log(`${game.team1} is more likely to win`);
team2 < team1 && console.log(`${game.team2} is more likely to win`);
*/

// **||, &&, AND ?? ASSIGNMENT OPERATORS**
/*

const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'Siesta',
  owner: 'Fernando Giovanni',
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

rest1.owner &&= rest1.owner = '<anonymous>';
rest2.owner &&= rest2.owner = '<anonymous>';

console.log(rest1);
console.log(rest2);
*/

// **NULLISH COALESCING OPERATOR**
/*
// Only works for null and undefined, not for 0 or ''

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 23;
console.log(guests); // 23 because 0 is falsey

// Using nullish coalescing
const guestCorrect = restaurant.numGuests ?? 23;
console.log(guestCorrect); // 0
*/

// **SHORT CIRCUITING**
/*
// If the first value is truthy then it will immediately return that first value

// Or
console.log(3 || 'Dean'); // 3
console.log('' || 'Dean'); // Dean
console.log(true || 0); // true
console.log(undefined || null); //null. Even though it's falsey it's the only value left

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); // 10

// A quicker syntax
const guests2 = restaurant.numGuests || 23;
console.log(guests2); // 23

// And &&
// Will keep going until it sees a falsey value and then outputs the last value

console.log(0 && 'Dean'); // 0
console.log(9 && 'Dean'); // Dean

console.log('Hello' && 9 && null && 'Belle'); // null (because that's where it short circuits)

// Practical Example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

// With &&
restaurant.orderPizza && restaurant.orderPizza('pepperoni', 'bacon');
// The first value is truthy so it will continue. The last value is the
// function call so it will be called
*/

// **REST**
/*
// In destructuring

// Spread is used on right side of =
const arr = [1, 2, ...[3, 4]];
console.log(arr); // [1,2,3,4]

// Rest is used on the left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // [1,2,[3,4,5]]

// Obviously Rest must be last element and there can only be one
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays);

// In functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(4, 5, 6);
add(7, 8, 9, 10);

const x = [23, 15, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'olives', 'pineapple');
*/

// **SPREAD OPERATOR**
/*
const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(newArr); // [1,2,7,8,9]
console.log(...newArr); // 1,2,7,8,9

const newMainMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMainMenu);

// Copy array
const mainCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets, NOT objects
const str = 'dean';
const letters = [...str];
console.log(letters);
console.log(...str);

// Example
// const ingredients = [
//   prompt('Ingredient 1: '),
//   prompt('Ingredient 2: '),
//   prompt('Ingredient 3: '),
// ];
// console.log(...ingredients);
// restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { founded: 1918, ...restaurant, founder: 'Leo' };
console.log(newRestaurant);
const restaurantCopy = { ...restaurant };
*/

// **DESTRUCTURING OBJECTS**
/*
restaurant.orderDelivery({
  starterIndex: 1,
  mainIndex: 0,
  time: '21:30',
  address: '7 Savell Ave',
});

// Same variable names
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Different Variable names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating Variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

// {a, b} = obj // This will not work because of the curly braces
({ a, b } = obj); // The brackets cause it to work
console.log(a, b); // a and b are overwritten with the values in obj

// Nested Objects
// const { fri } = openingHours;
// console.log(fri); // Prints an object with the opening and closing hours

const {
  fri: { open, close },
} = openingHours;
console.log(open, close);
*/

// **DESTRUCTURING ARRAYS**
/*
let [main, secondary] = restaurant.categories;
console.log(main, secondary);

// Switching the order
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return variables from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 3, [4, 5]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
