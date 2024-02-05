/* W05: Programming Tasks */
const templesElement = document.getElementById('temples');

/* async displayTemples Function */
const getTemples = async () => {
  const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
  templeList = await response.json();
  displayTemples(templeList);
};

/* async getTemples Function using fetch()*/


/* Declare and initialize global variables */
const displayTemples = (temples) => {
  temples.forEach((temple) => {
    const article = document.createElement('article');

    const h2 = document.createElement('h2');
    h2.textContent = temple.templeName;
    article.appendChild(h2);

    const img = document.createElement('img');
    img.src = temple.imageUrl;
    img.alt = temple.location;
    article.appendChild(img);
    templesElement.appendChild(article);
  });
};




getTemples().then(() => {
  console.log(templeList);
});
/* reset Function */
const reset = () => {
  templesElement.innerHTML = "";
};


/* filterTemples Function */
const filterTemples = (temples) => {
  reset();
  const filter = document.getElementById('filtered').value;

  switch(filter) {
    case 'utah':
      displayTemples(temples.filter(temple => temple.location.includes('Utah')));
      break;
    case 'nonutah':
      displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
      break;
    case 'older':
      displayTemples(temples.filter(temple => new Date(temple.dedicatedDate) < new Date(1950, 0, 1)));
      break;
    default:
      displayTemples(temples);
      break;
  }
};


getTemples();

/* Event Listener */
 document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) });


