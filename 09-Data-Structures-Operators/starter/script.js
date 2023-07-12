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

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//DATA STRUCTURES MODERN OPERATORS AND STRINGS

//LECTURE #107
console.log(3 || 'Jonas');
//or operatörü her türden veri tipini alabilir ilk operanda baktığında true ise diğerine hiç bakmaz ve true döndürür(ilk  operand bool hariç farklı veri tipinde ise ne verildiyse onu döndürür)
console.log('' || 'Jonas'); //Jonas
console.log(true || 0); //true
console.log(undefined || null); //null

console.log(undefined || 0 || '' || 'Hello' || 23 || null); //ilk true değer hello olduğu için onu döndürür

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
//numgest true ise numgest i döndür false ise 10 döndür
console.log(guests1);
/*
//LECTURE #106
const arr = [1, 2, ...[3, 4]]; // ...[3, 4] ifadesi spread operatörü ile bir dizi genişletme işlemidir. Bu ifade, [3, 4] dizisini elemanlarına ayırarak, 1, 2, 3, 4 şeklinde bir dizi oluşturur. Bu yeni dizi daha sonra arr değişkenine atanır

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); //...others ifadesi dizinin geri kalan tüm elemanlarını yakalar ve others adında bir dizi olarak atanır.

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood); //pasta yı atlar

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//************************************

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olivers', 'spinach'); //ilki tek diğer üçü dizi içinde gelir
restaurant.orderPizza('mushrooms');
//ilki tek, dizi boş gelir
*/

/*
//LECTURE #105

//Spread (...)

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//************************************** 
const mainMenuCopy = [...restaurant.mainMenu];

//************************************
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//****************************************
// Iterables(yenilenebilir): arrays, strings, maps, sets. NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
// console.log(`${...str} Schmedtmann`);// "..." yı bu şekilde kullanamayız hata verir

//*****************************************
const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3'),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

//*******************************************
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

/*
//LECTURE #104

// Destructuring Objects

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//*********************************** 
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//*************************************** 
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

//************************************** 
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/

/*
//LECTURE #103

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

 Switching variables
 const temp = main;
 main = secondary;
 secondary = temp;
 console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

//******************************************* 
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//********************************
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

//************************************* 
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
