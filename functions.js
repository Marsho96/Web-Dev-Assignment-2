//Shane Marshall
//R00141496

var mycitTest = 1;
var pizzaCost = 10;
var totalCost = pizzaCost;
var bbqCost = 0.25;
var extraCheeseCost = 0.25;
var pepperoniCost = 0.50;
var salamiCost = 0.50;
var hamCost = 0.50;
var chickenCost = 1;
var sausageCost = 1;
var baconCost = 1.50;


function regularSauce() {
	totalCost -= bbqCost;
}

function barbequeSauce() {
	totalCost += bbqCost;
}

function extraCheese() {
	totalCost += extraCheeseCost;
}

function regularCheese() {
	totalCost -= extraCheeseCost;
}

function pizzaTopPepperoni() {
	var displayPizza = document.getElementById("displayPizza");
	
	if (document.getElementById('pepperoni').checked){
		displayPizza.innerHTML +=
		"<img id='img4' src='img/pepperoni.png' alt=''>";
		totalCost += pepperoniCost;
	}
	else{
		
		document.getElementById('img4').remove();
		totalCost -= pepperoniCost;
	}
}

function pizzaTopSalami() {
	var displayPizza = document.getElementById("displayPizza");
	
	if (document.getElementById('salami').checked){
		displayPizza.innerHTML +=
		"<img id='img5' src='img/salami.png' alt=''>";
		totalCost += salamiCost;
	}
	else{
		
		document.getElementById('img5').remove();
		totalCost -= salamiCost;
	}
}

function pizzaTopHam() {
	var displayPizza = document.getElementById("displayPizza");
	
	if (document.getElementById('ham').checked){
		displayPizza.innerHTML +=
		"<img id='img6' src='img/ham.png' alt=''>";
		totalCost += hamCost;
	}
	else{
		
		document.getElementById('img6').remove();
		totalCost -= hamCost;
	}
}

function pizzaTopChicken() {
	var displayPizza = document.getElementById("displayPizza");
	
	if (document.getElementById('chicken').checked){
		displayPizza.innerHTML +=
		"<img id='img7' src='img/chicken.png' alt=''>";
		totalCost += chickenCost;
	}
	else{
		
		document.getElementById('img7').remove();
		totalCost -= chickenCost;
	}
}

function pizzaTopSausage() {
	var displayPizza = document.getElementById("displayPizza");
	
	if (document.getElementById('sausage').checked){
		displayPizza.innerHTML +=
		"<img id='img8' src='img/sausage.png' alt=''>";
		totalCost += sausageCost;
	}
	else{
		
		document.getElementById('img8').remove();
		totalCost -= sausageCost;
	}
}

function pizzaTopBacon() {
	var displayPizza = document.getElementById("displayPizza");
	
	if (document.getElementById('bacon').checked){
		displayPizza.innerHTML +=
			"<img id='img9' src='img/bacon.png' alt=''>";
		totalCost += baconCost;
	}
	else{
		
		document.getElementById('img9').remove();
		totalCost -= baconCost;
	}
}

function displayPrice() {
	var displayPrice = document.getElementById("displayPrice");
	displayPrice.innerHTML = "Total price: <div class='price'> &euro;" 
		+ totalCost + "</div><br><hr>";
	displayPrice.innerHTML += "Pizza: <div class='price'> &euro;"
		+ pizzaCost + "</div><br>";
	
	if (document.getElementById('Bbq').checked)
		displayPrice.innerHTML += "Barbeque Sauce: <div class='price'> &euro;"
			+ bbqCost + "</div><br>";
	if (document.getElementById('ExtraMozzarella').checked)
		displayPrice.innerHTML += 
			"Extra Mozzarella: <div class='price'> &euro;" 
			+ extraCheeseCost + "</div><br>";
	if (document.getElementById('pepperoni').checked)
		displayPrice.innerHTML += "Pepperoni: <div class='price'> &euro;"
			+ pepperoniCost + "</div><br>";
	if (document.getElementById('salami').checked)
		displayPrice.innerHTML += "Salami: <div class='price'> &euro;" 
			+ salamiCost + "</div><br>";
	if (document.getElementById('ham').checked)
		displayPrice.innerHTML += "Ham: <div class='price'> &euro;" 
			+ hamCost + "</div><br>";
	if (document.getElementById('chicken').checked)
		displayPrice.innerHTML += "Chicken: <div class='price'> &euro;"
			+ chickenCost + "</div><br>";
	if (document.getElementById('sausage').checked)
		displayPrice.innerHTML += "Sauage: <div class='price'> &euro;" 
			+ sausageCost + "</div><br>";
	if (document.getElementById('bacon').checked)
		displayPrice.innerHTML += "Bacon: <div class='price'> &euro;"
			+ baconCost + "</div><br>";
	
	var email = document.getElementById("e-mail").value
	if (email.includes("mycit.ie"))
	{
	displayPrice.innerHTML += "mycit.ie e-mail: <div class='price'> &euro;-"
		+ 2 + "</div><br>";
	}
	
	displayPrice.innerHTML += "<hr>";
}

function discount(){
	var email = document.getElementById("e-mail").value
	if (email.includes("mycit.ie"))
	{
		if (mycitTest === 1)
		{
		alert("You received a \u20ac2.00 discount for having a mycit.ie e-mail!");
		totalCost -= 2;
		displayPrice();
		mycitTest = 2;
		}
	}
}

