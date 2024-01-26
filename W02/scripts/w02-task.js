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


/*

*/
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('src', profilePicture);

var myName = "Cristiam Sanchez";  
imageElement = document.getElementById("im1");
imageElement.setAttribute("alt", `${myName}`);

/* Step 5 - Array */

let myFood = ["Cake", "Baleadas", "Pastelitos","Hamburguer","Tacos","Tortas","Enchiladas"];
var miDiv = document.getElementById("food");
myFood.push('beefsteake');


  // set new values
miDiv.innerHTML += `<br> ${myFood}`;
//myFood.join(', '); 


// delete first element
myFood.shift();
miDiv.innerHTML += `<br> ${myFood}`;
// delete last element
myFood.pop();
miDiv.innerHTML += `<br> ${myFood}`;

  // get the value by ID
  // set new values
  


/*
var meal = document.getElementById('food').value;
console.log(meal);


myFood.forEach(function (elemento, indice, array) {
  meal.innerHTML  += `<br>${elemento}`;
});

meal.innerHTML = meal;

myFood.forEach((element) => meal.innerHTML(element));

*/



