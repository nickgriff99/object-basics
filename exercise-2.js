/* 
Module Two Exercise: Object Methods
Start with exercise-2.md if you haven't read it! 
*/

//  DO NOT EDIT THE BELOW OBJECT // 

const papaJohns = {
  name: "Papa John's",
  slogan: "Better Ingredients. Better Pizza. Papa John's.",
  cuisines: ["italian", "american", "pizza"],
  pizzaToppings: {
    pepperoni: 2,
    peppers: 0.6,
    extraCheese: 1.5,
    olives: 0.5,
    bacon: 3,
    extraSauce: 1,
  },
  numberOfStars: 3.5,
  favorited: false,
  address: "555 Main Street",
  zipcode: 11234,
  acceptsReservations: false,
};

// DO NOT EDIT THE ABOVE OBJECT // 

// YOUR WORK GOES HERE // 

function grabCategories(obj) {
  return Object.keys(obj);
}

const categories = grabCategories(papaJohns);
console.log(categories);

const pizzaToppingNames = grabCategories(papaJohns.pizzaToppings);
console.log(pizzaToppingNames);

function grabValues(obj, targetNumber) {
  return Object.values(obj).length === targetNumber;
}

const isValueCountCorrect = grabValues(papaJohns, 9);
console.log(isValueCountCorrect);

const getToppingsInfo = grabValues(papaJohns.pizzaToppings, 6);
console.log(getToppingsInfo);
