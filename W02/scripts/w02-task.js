/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullname ='Cristiam Jose Sanchez Zelaya'

let currentYear ='2024'

let profilePicture ='images/Profile.png'


/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');

let yearElement = document.querySelector('#year');

let imageElement = document.getElementById('im1');

/* Step 4 - Adding Content */

nameElement.innerHTML =`<strong>${fullname}</strong>`;

yearElement.innerHTML =`<strong>${currentYear}</strong>`;

imageElement.setAttribute('src', profilePicture);

/* Step 5 - Array */

let myFood = ["Cake", "Baleadas", "Pastelitos","Hamburguer","Tacos","Tortas","Enchiladas"];
myFood.push('beefsteake');

var miDiv = document.getElementById("food");

  // set new values
  miDiv.innerHTML = myFood.join(', '); 

// delete first element
myFood.shift();
// delete last element
myFood.pop();

var miDiv2 = document.getElementById("food2");
  // get the value by ID
  // set new values
miDiv2.innerHTML = myFood.join(', '); 
  


/*
var meal = document.getElementById('food').value;
console.log(meal);


myFood.forEach(function (elemento, indice, array) {
  meal.innerHTML  += `<br>${elemento}`;
});

meal.innerHTML = meal;

myFood.forEach((element) => meal.innerHTML(element));

*/



