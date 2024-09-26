'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
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
  },
  order: function (starterIndex, mainIndex) {
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
};

// Spread Operator
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

// Destructuring Objects

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

// Destructuring Arrays
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
