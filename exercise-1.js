/* 
Module One Exercise: Object Syntax & Notation
Start with exercise-1.md if you haven't read it! 
*/

// YOUR WORK GOES HERE //

const tucanos = {
  name: 'Tucanos',
  cuisines: ['Brazilian', 'Steakhouse'],
  numberOfStars: 4.5,
  favorited: true,
};

tucanos.address = '555 Main St';
tucanos.zipcode = 84101;
tucanos.acceptsReservations = true;
tucanos.numberOfStars = 5;
tucanos.favorited = false;
tucanos.cuisines.push('Seafood');

function retrieveProperty(obj, key) {
  if (obj.hasOwnProperty(key)) {
    console.log(obj[key]);
  }
    else {
    console.log('The information you requested does not exist.');
  }
}

retrieveProperty(tucanos, 'cuisines');
retrieveProperty(tucanos, 'favorited');
retrieveProperty(tucanos, 'name');
retrieveProperty(tucanos, 'nickName');
retrieveProperty(tucanos, 'state');

console.log(tucanos);