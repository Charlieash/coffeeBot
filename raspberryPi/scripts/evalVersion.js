//Charlie Ashdown 
//Code to interact with the first draft of the interactable screen for the coffee making robot
//github.com/Charlieash

//This is the colour of the panels when you select them 
var selectColour = 'rgb(33, 108, 194)';
let stored = "";
let orderStatus = false;
var coffee; //this variable represents the current coffee selection in the menu
var demo = document.getElementById("demo");
var add = document.getElementById("addToOrder")
let oldTypeValue = "0"

var milk = ""; //This variable represents the current milk selection in the menu

//change these lists to add and remove coffees and milks as seen fit
var coffees = ["americano", "latte", "flat_white", "espresso", "hot_water","hot_chocolate"];
var milks = []; /*["semi_skimmed", "whole_milk", "almond_milk", "soy_milk","oat_milk", "no_milk"];*/

//calls the functions to set up the interaction between the buttons and what they rerpresent 
defineCoffees(coffees);
defineMilks();


demo.addEventListener("click", function () { demo.innerHTML = "Thank you for your order"; if (coffee != null /*&& milk != null*/) { result = createString(coffee, milk) };stored = stored.concat(result); sendData(stored) ;location.reload(); });
add.addEventListener("click", function () {if (coffee != null /*&& milk != null*/) { ;result = createString(coffee, milk) };stored = stored.concat(result," "); resetCoffee(); /*resetMilk();*/ ;});
oldTypeValue = checkOrder(oldTypeValue);

//tests warning function
//warning('low on coffee');