'use strict';
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0,
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

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

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//DATA STRUCTURES MODERN OPERATORS AND STRINGS

//LECTURE #123

console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' '); //join ile arasına boşluk koyup birleştirdik
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(' '));
};
capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');

const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(64637836));
console.log(maskCreditCard(43378463864647384));
console.log(maskCreditCard('33485993847755774747'));

const message2 = 'Bad waether... All Departues Delayed...';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛫'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);
/*

//LECTURE #122
const airline = 'TAP Air Portugal';
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

const email = 'hello@jonas.io';
const loginEmail = ' Hello@Jonas.Io \n';

const lowerEmail = loginEmail.toLocaleLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);
//OR
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

//replace
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const annuncement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(annuncement.replace('door', 'gate')); //ilk gördüğü door u gate yapar
console.log(annuncement.replaceAll('door', 'gate')); // bütün door ları gate yapar
console.log(annuncement.replace(/door/g, 'gate')); //bütün door ları gate yapar

const plane = 'Airbus A320neo';
console.log(plane.includes('A320')); //true
console.log(plane.includes('Boeing')); //false
console.log(plane.startsWith('Air')); //true

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW ARirbus family');
}

const checkBaggage = function (items) {
  const baggage = items.toLowerCase(); //bunu kullanmazsak eğer ilk çağırdığımızda knife k si büyük olduğu için Welcome aboard! gelir.
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snack and a gun for protection');
*/

/*

//LECTURE #121
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal')); // böyle -1 , P ile yazarsak 8 döndürür harfe duyarlı

console.log(airline.slice(4)); // 4 başlama indeksidir (Air Portugal)
console.log(airline.slice(4, 7)); // 4 başlangıç dahil 7 bitiş dahil değil
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // +1 i ekleme sebebimiz sondaki kelimeyi başındaki boşlukla almasın diye

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  //B and E middle seat
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat');
  else console.log('You got luck');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('jonas'));
console.log(typeof new String('jonas')); // bir nesne (object) olmuştur
//?
console.log(typeof new String('jonas').slice(1)); // string
*/

/*
//LECTURE #120
//CODING CHALLENGE #3
const gameEvents = new Map([
  [17, 'GOAL'],
  [36, 'Substitution'],
  [47, 'GOAL'],
  [61, 'Substitution'],
  [64, 'Yello Card'],
  [69, 'Red Card'],
  [70, 'Substitution'],
  [72, 'Substitution'],
  [76, 'GOAL'],
  [80, 'GOAL'],
  [92, 'Yellow Card'],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);
//*************************************************
gameEvents.delete(64);
//*************************************************
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}
*/

/*

//LECTURE #118
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again!'],
]);
console.log(question);

//object den map e çevirme
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const answer = Number(prompt('Your answer'));
console.log(answer);
const correct = question.get('correct');

if (answer === correct) {
  console.log(question.get(true));
} else console.log(question.get(false));
//OR
console.log(question.get(question.get('correct') === answer));

//map i dizi ye çevirme
console.log([...question]); //1
console.log([...question.entries()]); //2
// 1 ve 2 sonuç aynı olur
console.log([...question.keys()]);
console.log([...question.values()]);
*/

/*

//LECTURE #117
//MAPS (keylerle eşleşmek  için kullandığımız veri yapısı)
//maps de key de temelde dizidir ancak maps de her tür key e sahip olabiliriz

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisban, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegatarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are close :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('catogaries'));
rest.delete(2);
//rest.clear;

const arr = [1, 2];
rest.set(arr, 'Test'); // arr yerine [1, 2] yazınca console.log(rest); undefined olur o yüzden değişkene atarız
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest.get('h1'));
console.log(rest);
console.log(rest.size);
console.log(rest.get(arr));
*/

/*

//LECTURE #116
//SETS(kümeler)
//bir kümeden değer alamayız sadece o değerin kümenin içinde olup olmadıdğını öğrenebiliriz değer almka istiyorsak dizi kullanabiliriz
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet); //olanı sadece bir defa getirir
console.log(new Set('Jonas'));
console.log(ordersSet.size); //3 (kaç çeşit)
console.log(ordersSet.has('Pizza')); //true (var mı )
console.log(ordersSet.has('Bread')); //false
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
//ordersSet.clear();
console.log(ordersSet);

//kümeler yenilenebilir bu yüzden döngülerde kullanabiliriz
for (const order of ordersSet) console.log(order);

//example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);
console.log(new Set('jonasschmedtmann').size);
*/

/*

//LECTURE #115
//CODING CHALLENGE #2

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

//**********************************************************************
//1
for (const [a, b] of game.scored.entries()) {
  console.log(`${a + 1}. golü ${b} attı.`);
}
//2
const xs = Object.values(game.odds);
let averange = 0;
for (const x of Object.values(game.odds)) {
  averange += x;
}
console.log((averange /= xs.length));

//3 ?
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}
*/

/*

//LECTURE #114

const properties = Object.keys(openingHours);
console.log(properties); ////openinGours da keyi olanları listeler dizi olarak

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day},`;
}
console.log(openStr);

for (const day of Object.keys(openingHours)) {
  console.log(day); //openinHours da keyi olanları listeler
}

const values = Object.values(openingHours);
console.log(values); //openingHours daki value değerlerini dizi içinde getirir

const entries = Object.entries(openingHours);
console.log(entries);

for (const x of entries) {
  console.log(x);
}

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
*/

/*

//LECTURE #113

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

//OR
//hata önler
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

//örnek
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

//*****************************************
//Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

//Array
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
console.log(users[0]?.name ?? 'User array empty');
//or
if (users.length > 0) console.log(users[0].name);
else console.log('user array empty');
*/

/*

//LECTURE #111
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`i + 1}: ${el}`);
}

//console.log([...menu.entries()]);
*/

/*

//LECTURE #110
//CODING CHALLENGE #1

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

const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
//const [gk, ...fieldPlayers] = players2;

const allPlayers = [...players1, ...players2];

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};
//printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
//printGoals('Davies', 'Muller');
printGoals(...game.scored);

team1 < team2 && console.log('Team 1 is more likely to win'); //ilk Kısım doğru olduğundan ikinci kısım konsola yazdırılır (&& operatörü kural)
team1 > team2 && console.log('Team 2 is more likely to win');
*/

/*

//LECTURE #109

const rest1 = {
  name: 'Capri',
  //numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

//rest1.numGuests = rest1.numGuests || 10;
//rest2.numGuests = rest2.numGuests || 10;
//rest1.numGuests ||= 10;
//rest2.numGuests ||= 10;

rest1.numGuests ??= 10;
////ilk değer null veya undefined ise o zaman ikinci değeri döndürür onun dışında hep ilk değeri döndürür
rest2.numGuests ??= 10;

//rest1.owner = rest1.owner && '<ANONYMOUS>';
//rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';// burada kısa devre vardır ilk değer hatalı olduğunda kısa devre yapar  

console.log(rest1);
console.log(rest2);
*/

/*

//LECTURE #108

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

console.log('---??---');
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect); //ilk değer null veya undefined ise o zaman ikinci değeri döndürür onun dışında hep ilk değeri döndürür
*/

/*

//LECTURE #107

console.log('---OR---');
console.log(3 || 'Jonas');
//or operatörü her türden veri tipini alabilir ilk operanda baktığında true ise diğerine hiç bakmaz ve true döndürür(ilk  operand bool hariç farklı veri tipinde ise ne verildiyse onu döndürür)
console.log('' || 'Jonas'); //Jonas
console.log(true || 0); //true
console.log(undefined || null); //null

console.log(undefined || 0 || '' || 'Hello' || 23 || null); //ilk true değer hello olduğu için onu döndürür

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
//numgest true ise numgest i döndür false ise 10 döndür
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('---AND---');
//false gördüğü ilk değeri yazar OR un tam tersi
console.log(0 && 'Jonas'); //0
console.log(7 && 'Jonas'); //Jonas
console.log('Hello' && 23 && null && 'Jonas'); //null

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
  //ilki direk gelecek ikinci dizi içinde
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
*/

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
