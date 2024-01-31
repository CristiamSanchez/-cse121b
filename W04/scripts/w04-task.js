/* LESSON 3 - Programming Tasks */


/* Profile Object  */
let myProfile ={
    name: "Cristiam Jose Sanchez Zelaya",
    photo: 'images/Profile.png',
    favoriteFoods: ["Cake", "Baleadas", "Pastelitos","Hamburguer","Tacos","Tortas","Enchiladas"],
    hobbies: ['Play basketball','watch movies','play chess', 'share time with my family'],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push({
    place:'La Ceiba, Atlantida, HN',
    length: '8 years'
});
myProfile.placesLived.push({
    place:'Guatemala city, Guatemala',
    length: '2 years'
});

myProfile.placesLived.push({
    place:'New York, USA',
    length: '3 Months'
});

/* DOM Manipulation - Output */
/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
imageElement = document.getElementById("photo");
imageElement.setAttribute("alt", `${myProfile.name}`);

/* Favorite Foods List*/
//document.querySelector('#favorite-foods').textContent = myProfile.favoriteFoods;
myProfile.favoriteFoods.forEach(food=>{
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});
/* Hobbies List */
myProfile.hobbies.forEach(hoobie=>{
    let ul = document.createElement('ul');
    ul.textContent = hoobie;
    document.querySelector('#hobbies').appendChild(ul);
});
//document.querySelector('#hobbies').textContent = myProfile.hobbies;


/* Places Lived DataList */
//document.querySelector('#places-lived').textContent = myProfile.placesLived.place;
//document.querySelector('#places-lived').textContent = myProfile.placesLived.length;

var dlElement = document.getElementById('places-lived');

myProfile.placesLived.forEach(function(placeObject) {
    // Create <dt> element and set its text content to the place property
    var dtElement = document.createElement('dt');
    dtElement.textContent = placeObject.place;
  
    // Create <dd> element and set its text content to the length property
    var ddElement = document.createElement('dd');
    ddElement.textContent = placeObject.length;
  
    // Append <dt> and <dd> elements to the <dl> element
    dlElement.appendChild(dtElement);
    dlElement.appendChild(ddElement);
  });

