//Charlie Ashdown 
//Code to interact with the first draft of the interactable screen for the coffee making robot
//github.com/Charlieash
//outdated


//This is the colour of the panels when you select them 
var selectColour = 'rgb(33, 108, 194)';

//-------------------------------------------------------------------------------------------------------------------------------------------------
//This portion of the script exists to change the colour of the correct icon when clicked as well as remembering which icons are currently selected
//-------------------------------------------------------------------------------------------------------------------------------------------------
var coffee; //this variable represents the current coffee selection in the menu
var americano = document.getElementById("americano");
var latte = document.getElementById("latte");
var flat_white = document.getElementById("flat_white");
var espresso = document.getElementById("espresso");
var hot_water = document.getElementById("hot_water");
var demo = document.getElementById("demo")

/*
when each individual panel for the coffees are selected it resets the colours of all the coffees, makes the current selected coffee 
correct, changes the background colour of the selected panel and displays the current combination of milk and coffee at the bottom
of the screen. 
*/
americano.addEventListener("click", function () { resetCoffee(); coffee = "americano"; americano.style.backgroundColor = selectColour; displayOrder(coffee, milk); });

latte.addEventListener("click", function () { resetCoffee(); coffee = "latte"; latte.style.backgroundColor = selectColour; displayOrder(coffee, milk); });

flat_white.addEventListener("click", function () { resetCoffee(); coffee = "flat white"; flat_white.style.backgroundColor = selectColour; displayOrder(coffee, milk); });

espresso.addEventListener("click", function () { resetCoffee(); coffee = "espresso"; espresso.style.backgroundColor = selectColour; displayOrder(coffee, milk); });

hot_water.addEventListener("click", function () { resetCoffee(); coffee = "hot water"; hot_water.style.backgroundColor = selectColour; displayOrder(coffee, milk); });


//-----------------------------------------------------------------------------------------------------------------------------------
//This portion of the script does the same as above but for the milk selections
//-----------------------------------------------------------------------------------------------------------------------------------
var milk; //This variable represents the current milk selection in the menu
var semi_skimmed = document.getElementById("semi_skimmed");
var whole_milk = document.getElementById("whole_milk");
var almond_milk = document.getElementById("almond_milk");
var soy_milk = document.getElementById("soy_milk");
var no_milk = document.getElementById("no_milk");

/*
when each individual panel for the milks are selected it resets the colours of all the milks, makes the current selected milk 
correct, changes the background colour of the selected panel and displays the current combination of milk and coffee at the bottom
of the screen. 
*/
semi_skimmed.addEventListener("click", function () { resetMilk(); milk = "semi skimmed"; semi_skimmed.style.backgroundColor = selectColour; displayOrder(coffee, milk); });

whole_milk.addEventListener("click", function () { resetMilk(); milk = "whole milk"; whole_milk.style.backgroundColor = selectColour; displayOrder(coffee, milk); });

almond_milk.addEventListener("click", function () { resetMilk(); milk = "almond milk"; almond_milk.style.backgroundColor = selectColour; displayOrder(coffee, milk); });

soy_milk.addEventListener("click", function () { resetMilk(); milk = "soy milk"; soy_milk.style.backgroundColor = selectColour; displayOrder(coffee, milk); });

no_milk.addEventListener("click", function () { resetMilk(); milk = "no milk"; no_milk.style.backgroundColor = selectColour; displayOrder(coffee, milk); });



//-----------------------------------------------------------------------------------------------------------------------------------
//This portion of the code displays the current selection of coffee and milk at the bottom of the page for testing purposes 
//-----------------------------------------------------------------------------------------------------------------------------------
demo.addEventListener("click", function () { demo.innerHTML = "Thank you for your order";if (coffee != null && milk != null) {result = createString(coffee, milk)}; sendData(result); })