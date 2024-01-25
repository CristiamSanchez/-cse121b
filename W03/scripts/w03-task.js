/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    //var total = number1 + number2;
    console.log(parseInt(number1) + parseInt(number2));
    return parseInt(number1) + parseInt(number2);
}

function addNumber(){
    let val1 = Number(document.querySelector('#add1').value);
    let val2 = Number(document.querySelector('#add2').value);
 
    document.querySelector('#sum').value = add(val1, val2);
}



/* Function Expression - Subtract Numbers */
function Subtract(number1, number2){
    //var total = number1 + number2;
    console.log(parseInt(number1) - parseInt(number2));
    return parseInt(number1) - parseInt(number2);
}

function SubtractNumbers(){

    let val1 = Number(document.querySelector('#subtract1').value);
    let val2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = Subtract(val1, val2);

}

/* Arrow Function - Multiply Numbers */
function Multiply(number1, number2){
    //var total = number1 + number2;
    console.log(parseInt(number1) * parseInt(number2));
    return parseInt(number1) * parseInt(number2);
}

function MultiplyNumbers(){

    let val1 = Number(document.querySelector('#factor1').value);
    let val2 = Number(document.querySelector('#factor2').value);

    
    document.querySelector('#product').value = Multiply(val1, val2);

}

/* Open Function Use - Divide Numbers */

function Divide(number1, number2){
    //var total = number1 + number2;
    console.log(parseInt(number1) / parseInt(number2));
    return parseInt(number1) / parseInt(number2);
}

function DivideNumbers(){

    let val1 = Number(document.querySelector('#dividend').value);
    let val2 = Number(document.querySelector('#divisor').value);

    
    document.querySelector('#quotient').value = Divide(val1, val2);

}


/* Decision Structure */
function GetTotalDue(){
    let subt = document.querySelector('#subtotal').value 
    
    if (document.getElementById('member').checked)
    {
        console.log(subt);
        if (isNaN(subt)) {
            alert("Please write numbers!"); 
          } else {
            var spanElement = document.querySelector('#total');
            var totalT =  subt - (subt*0.2);
            spanElement.innerHTML = totalT.toFixed(2);
          }
    }else{
        if (isNaN(subt)) {
            alert("Please write numbers!"); 
          } else {
            var spanElement = document.querySelector('#total');
            spanElement.textContent = subt;
          }
    }
}



/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
var spanElement = document.querySelector('#array');
spanElement.textContent = numbersArray;

/* Output Odds Only Array */
var numerosPares = numbersArray.filter(numero => numero % 2 === 0);
var spanElement = document.querySelector('#odds');
spanElement.textContent = numerosPares;


/* Output Evens Only Array */
var numerosPares = numbersArray.filter(numero => numero % 2 !== 0);
var spanElement = document.querySelector('#evens');
spanElement.textContent = numerosPares;

/* Output Sum of Org. Array */
var sumArray = numbersArray.reduce((sum, number) => sum + number);
var spanElement = document.querySelector('#sumOfArray');
spanElement.textContent = sumArray;

/* Output Multiplied by 2 Array */
var multip = numbersArray.map((number) => number * 2);
var spanElement = document.querySelector('#multiplied');
spanElement.textContent = multip;

/* Output Sum of Multiplied by 2 Array */
var sumArrayX2 = numbersArray.reduce((sum, number) => sum + number );
var spanElement = document.querySelector('#sumOfMultiplied');
spanElement.textContent = sumArrayX2 * 2;