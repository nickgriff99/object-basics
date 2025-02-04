// Module 3 Exercise: Looping in Objects
// Start with exercise-3.md if you haven't read it!

const dominos = {
  name: "Domino's",
  cuisines: ["italian", "new york", "pizza"],
  pizzaToppings: {
    pepperoni: 2.2,
    mushrooms: 0.7,
    extraCheese: 1.4,
    onions: 0.5,
    sausage: 2.8,
    extraSauce: 0.8,
  },
  starReviews: {
    Peach: 3,
    Yoshi: 2.1,
    Bowser: 4,
    Mario: 5,
    Luigi: 5,
    Gumba564: 3.4,
    "Donkey Kong": 3.2,
  },
  favorited: true,
  address: "123 Elm Street",
  zipcode: 54321,
  acceptsReservations: true,
};

function printPizzaPlace(pizzaPlace) {
    for (const [key, value] of Object.entries(pizzaPlace)) {
      if (typeof value === "object" && value !== null) {
      console.log(`${key}:`);
      for (const [nestedKey, nestedValue] of Object.entries(value)) {
        console.log(`  ${nestedKey}: ${nestedValue}`);
      }
    } else {
      console.log(`${key}: ${value}`);
    }
  }
}

printPizzaPlace(dominos);

function toppingsPriceRange(pizzaPlace) {
  const prices = Object.values(pizzaPlace.pizzaToppings);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  return [minPrice, maxPrice];
}

const priceRange = toppingsPriceRange(dominos);
console.log(priceRange);

function calculateAverageRating(pizzaPlace) {
  const ratings = Object.values(pizzaPlace.starReviews);
  const sum = ratings.reduce((acc, rating) => acc + rating, 0);
  return sum / ratings.length;
}

const averageRating = calculateAverageRating(dominos);
console.log(averageRating);