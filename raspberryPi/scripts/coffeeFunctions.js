//Functions file for the coffee making robot script
//github.com/Charlieash

//this function resets the background colours for the coffees to their original colour
function resetCoffee() {
    for(let coffeeCount = 0; coffeeCount < coffees.length; coffeeCount++){
        eval(coffees[coffeeCount]+'.style.backgroundColor = "rgb(132, 129, 129)";');
    }
    
}

//the function resetMilk() resets all the background colours of the milks to the original background colours
function resetMilk(){
    for(let milkCount = 0; milkCount < milks.length; milkCount++){
        eval(milks[milkCount]+'.style.backgroundColor = "rgb(132, 129, 129)";');
    }
}


//this function combines the two strings for coffee and milk into the same string so that it is easily outputted
function createString(coffee,milk){
    let concat = coffee.concat(" ", milk);
    concat = concat.replace(/_/g, " ");
    return(concat);
}

//this displays the order at the bottom of the screen given neither the variables coffee or milk are empty 
function displayOrder(coffee, milk,stored, coffees) {
    if (coffee != null /*&& milk != null*/) {
        let result = stored;
        concat = createString(coffee, milk);
        result = result.concat(concat);
        let clean = countDupes(result, coffees);
        output = "Confirm: <br>".concat(clean);
        demo.innerHTML = output;
        add.innerHTML = "Add To Order"
    }
}

//dynamically generating and assigning coffees based on array of coffees
function defineCoffees(coffees){
    const firstRow = document.getElementById("row1");
    for(let countCoffee = 0; countCoffee < coffees.length; countCoffee++){
        let currentCoffee = coffees[countCoffee];
        let newDiv = document.createElement('div');
        newDiv.setAttribute("id", coffees[countCoffee]);
        newDiv.setAttribute("class", "coffee");
        let coffeeP = document.createElement("p");
        coffeeP.setAttribute("class", "coffee");
        let image = document.createElement("img");
        image.src = eval('"images/'+coffees[countCoffee]+'.jpg"');
        image.setAttribute("class", "img");
        let formattedCoffee = coffees[countCoffee].replace(/_/g, " ");
        let coffeeName = document.createTextNode(formattedCoffee);
        coffeeP.appendChild(coffeeName);
        newDiv.appendChild(image);
        newDiv.appendChild(coffeeP);
        firstRow.appendChild(newDiv);
        eval('var '+coffees[countCoffee]+'= '+'document.getElementById(coffees[countCoffee])' + ';');
        eval(coffees[countCoffee]+ '.addEventListener("click", function () {coffee =currentCoffee; resetCoffee();displayOrder(coffee, milk,stored, coffees); '+ coffees[countCoffee]+'.style.backgroundColor = selectColour; });');
        eval(coffees[countCoffee]+'.style.width = "'+(100/(coffees.length+1)-(coffees.length/2))+'%"');
    }
}


//dynamically generating and assigning milks based on array of milks
function defineMilks() {
    const secondRow = document.getElementById("row2");
    for(let countMilk = 0; countMilk < milks.length; countMilk++){
        let currentMilk = milks[countMilk];
        let newDiv = document.createElement('div');
        newDiv.setAttribute("id", milks[countMilk]);
        newDiv.setAttribute("class", "coffee");
        let milkP = document.createElement("p");
        milkP.setAttribute("class", "coffee");
        let image = document.createElement("img");
        image.src = eval('"images/'+milks[countMilk]+'.jpg"');
        image.setAttribute("class", "img");
        let formattedMilk = milks[countMilk].replace(/_/g, " ");
        let milkName = document.createTextNode(formattedMilk);
        milkP.appendChild(milkName);
        newDiv.appendChild(image);
        newDiv.appendChild(milkP);
        secondRow.appendChild(newDiv);
        eval('var '+milks[countMilk]+'= '+'document.getElementById(milks[countMilk])' + ';');
        eval(milks[countMilk]+ '.addEventListener("click", function () {milk =currentMilk; resetMilk();displayOrder(coffee, milk,stored, coffees); '+ milks[countMilk]+'.style.backgroundColor = selectColour; });');
        eval(milks[countMilk]+'.style.width = "'+(100/(milks.length+1)-(milks.length/2))+'%"');
    }
}
//---------------------------------------------------------------------------------------------------------------
//Future functions
//---------------------------------------------------------------------------------------------------------------
function sendData(stored) {
    //this function will send received data to system
    var date = new Date();
    date.setTime(date.getTime() + (2 * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toGMTString();
    let clean = countDupes(stored, coffees);
    clean = clean.replace(/ /g, "_");
    clean = clean.replace(/<br>/g, " ");
    document.cookie = "order = " +clean + expires +"; path=/";
    return(stored);
}

//creates a pop up warning banner
function warning(warningMessage){
    let warning = document.getElementById("warning");
    eval('warning.innerHTML ="Warning: ' + warningMessage+'";');
}

function removeWarning(){
    let warning = document.getElementById("warning");
    warning.innerHTML = "";
}
function startOrder(order){
    order = [];
}
function addToOrder(result, order){
    order.push(result)
}
function countDupes(tempResult, coffees){
    let clean = "";
    let resultCopy = tempResult;
    var cleanCoffees = coffees.slice();
    for(let dupes = 0; dupes < cleanCoffees.length; dupes++){
        cleanCoffees[dupes] = cleanCoffees[dupes].replace(/_/g, " ");
        numDupes = resultCopy.split(cleanCoffees[dupes]).length - 1;
        if(numDupes > 1){clean = clean.concat(cleanCoffees[dupes], " x", numDupes, "<br>");}
        else if(numDupes == 1){(clean = clean.concat(cleanCoffees[dupes], "<br>"))}
    }
    return(clean);
}

function readXml(xmlFile){

    var xmlDoc;
    
    if(typeof window.DOMParser) {
        xmlhttp=new XMLHttpRequest();
        xmlhttp.open("GET",xmlFile,false);
        if (xmlhttp.overrideMimeType){
            xmlhttp.overrideMimeType('text/xml');
        }
        xmlhttp.send();
        xmlDoc=xmlhttp.responseXML;
    }
    else{
        xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async="false";
        xmlDoc.load(xmlFile);
    }
    var root=xmlDoc.getElementsByTagName("root");
    var doc = root[0].getElementsByTagName("doc")
    var field = doc[0].getElementsByTagName("field1");
    var typeValue = field[0].childNodes[0].nodeValue;
    return(typeValue);
    }

function checkOrder(oldTypeValue){
    let complete = '';
    let xmlFile = "orderComplete.xml";
    var typeValue = readXml(xmlFile);
    var orderCompleteId = document.getElementById("orderComplete");
    if(typeValue != oldTypeValue){
        complete = typeValue;
        oldTypeValue = typeValue;
        let displayOrderComplete = document.createElement('div');
        displayOrderComplete.setAttribute("id", complete);
        displayOrderComplete.setAttribute("class", "orderCompleteP");
        //displayOrderComplete.setAttribute("class", "orderComplete");
        orderCompleteId.appendChild(displayOrderComplete);
        var displayOrderCompleteId = document.getElementById(complete);
        eval('displayOrderCompleteId.innerHTML='+complete+';');
    }
    var orderCompletePId = document.getElementById("orderCompleteP");
    orderCompletePId.innerHTML = "Order complete: ";

    complete = '';
    setTimeout(checkOrder,1000);
    return(oldTypeValue);
}