
function enterName(jk){
console.log(jk);

result = prompt("Enter your username:",'');
//alert(result);

if(jk==1) {
document.getElementById('Player1').innerHTML = result;
document.getElementById('w1').style.display = 'block';
document.getElementById('p1').style.display = 'none';
}else{
document.getElementById('Player2').innerHTML = result;
document.getElementById('w2').style.display = 'block';
document.getElementById('p2').style.display = 'none';
}; 



}


function getW(w){
result = prompt("Enter a number:",'');

if(!isNaN(result) && result != null && result != ""){
   if(w==1){ 
                if(result<=100){
                    callAPI(result,1);
                }else{
                    alert('Enter a valid number between 1-100');
                }
        }else{
                if(result<=100){
                    callAPI(result,2);
                }else{
                    alert('Enter a valid number between 1-100');
                }
            }
    }else{
        alert('Enter a number');   
    }
}

    function callAPI(n,position) {
        var url = "https://pokeapi.co/api/v2/pokemon/" + n;
        console.log(url);
        // Llamada a la URL
        fetch(url).then(respuesta => respuesta.json())
            .then(data => {
                var img = data.sprites.other["official-artwork"].front_default;
                var name = data.name;
                var weight = data.weight;
                var height = data.height;
                var types = '';
                var move = "";
                var stadistics = "";

                data.types.forEach(t => {
                    types += t.type.name + " | ";
                });

                data.moves.forEach(t => {
                    move += t.move.name + " ";
                });

                data.stats.forEach(s => {
                    stadistics += s.stat.name + ": " + s.base_stat + " ";
                });

                crearPokemon(img, name, types, weight, height, move, stadistics, position);
            })
    }

    function crearPokemon(imag, name, types, weight, height, move, stadistics, position) {
        if(position==1){var div = document.getElementById("card1");} else{var div = document.getElementById("card2");}
        
        div.innerHTML = ""; // clean div

        var img = document.createElement("img");
        var h5 = document.createElement("h5");
        var p1 = document.createElement("p");
        var p2 = document.createElement("p");
        var p3 = document.createElement("p");
        var p5 = document.createElement("p");

        div.append(img, h5, p1, p2, p3, p5);

        div.classList = "card m-5";
        div.setAttribute("style", "width:500px");

        img.classList = "card-img-top";
        img.setAttribute("src", imag);
        img.setAttribute("style", "width:7rem");

        h5.classList = "card-title";
        p1.classList = "card-text";
        p2.classList = "card-text";
        p3.classList = "card-text";
        p5.classList = "card-text";

        h5.innerHTML = name;
        p1.innerHTML = types;
        p2.innerHTML = "weight: " + weight;
        p3.innerHTML = "height: " + height;
        p5.innerHTML = stadistics;
    }

function reset(){
    var div = document.getElementById("card1");
        div.innerHTML = "";

    var div2 = document.getElementById("card2");
        div2.innerHTML = "";

    location.reload();
}










