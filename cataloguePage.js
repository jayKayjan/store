function item(description, prices) {  //constructive function created 
  this.description = description 
  this.prices = prices;
};

let XIE = new item ("Eyelash Curler", 57);  
let STYLO  = new item ("Long Lasting Eyeliner", 46);
let RAY = new item ("Kabuki Brush", 50);
let PALLETTE = new item ("Conceal-Highlight colour", 70);
let No7 = new item ("Mascara-Extreme wear  Rinsable", 38);
let Revlon = new item ("Hydrating Vibrant Shine Lip Colour", 40);
//saves everthing in the session
sessionStorage.setItem("Catalogue", JSON.stringify([XIE , STYLO  , RAY, PALLETTE, No7  , Revlon ]));


var amount = parseInt(localStorage.getItem("Amount")); //getting the item amount 
if (!amount) { //
  amount = 0;
  var items = [];  // creating empty array
  localStorage.setItem("Items", JSON.stringify(items)); //converting the items to a string using JSON
} else {
  var items = JSON.parse(localStorage.getItem("Items")); // getting the item description
};

localStorage.setItem("Amount", amount); //adding the amount of the items to the local storage

if (!items) {
}

function shopCart1() {     //creating function
  var things = JSON.parse(sessionStorage.getItem("Catalogue")); //gets the item from the catalogue
  var j = JSON.parse(localStorage.getItem("Items")); //creating variable for items
  var k = parseInt(localStorage.getItem("Amount")); // creating variables for amount of the items

  if (j == null) {      
    j = [things[0]]; 
  } else {
    j.push(things[0]); // adds new items to the end of an array, and returns the new length. 
  };

  localStorage.setItem("Items", JSON.stringify(j));  //sets the items and converts the items to a string 

  localStorage.setItem("Amount", k += things[0].prices); 
  alert("The current total of the items is R" + k);
};  //creating an alert to show the items total

function shopCart2() {
  var things = JSON.parse(sessionStorage.getItem("Catalogue"));
  var j = JSON.parse(localStorage.getItem("Items"));
  var k = parseInt(localStorage.getItem("Amount"));

  if (j == null) {
    j = [things[1]];
  } else {
    j.push(things[1]);
  };

  localStorage.setItem("Items", JSON.stringify(j));

  localStorage.setItem("Amount", k += things[1].prices);
  alert("The current total of the items is R" + k);
};

function shopCart3() {
  var things = JSON.parse(sessionStorage.getItem("Catalogue"));
  var j = JSON.parse(localStorage.getItem("Items"));
  var k = parseInt(localStorage.getItem("Amount"));

  if (j == null) {
   j = [things[2]];
  } else {
    j.push(things[2]);
  };

  localStorage.setItem("Items", JSON.stringify(j));

  localStorage.setItem("Amount", k += things[2].prices);
  alert("The current total of the items is R" + k);
};

function shopCart4() {
  var things = JSON.parse(sessionStorage.getItem("Catalogue"));
  var j = JSON.parse(localStorage.getItem("Items"));
  var k = parseInt(localStorage.getItem("Amount"));

  if (j == null) {
    j = [things[3]];
  } else {
    j.push(things[3]);
  };

  localStorage.setItem("Items", JSON.stringify(j));

  localStorage.setItem("Amount", k += things[3].prices);
  alert("The current total of the items is R" + k);
};

function shopCart5() {
  var things = JSON.parse(sessionStorage.getItem("Catalogue"));
  var j = JSON.parse(localStorage.getItem("Items"));
  var k = parseInt(localStorage.getItem("Amount"));

  if (j == null) {
    j = [things[4]];
  } else {
    j.push(things[4]);
  };

  localStorage.setItem("Items", JSON.stringify(j));

  localStorage.setItem("Amount", k += things[4].prices);
  alert("The current total of the items is R" + k);
};

function shopCart6() {
  var things = JSON.parse(sessionStorage.getItem("Catalogue"));
  var j = JSON.parse(localStorage.getItem("Items"));
  var k = parseInt(localStorage.getItem("Amount"));

  if (j == null) {
    j = [things[5]];
  } else {
    j.push(things[5]);
  };

  localStorage.setItem("Items", JSON.stringify(j)); //converts the item to a string

  localStorage.setItem("Amount", k += things[5].prices); //gets the amount from the local storage and adds it to the total
  alert("The current total of the items is R" + k);  // alert will popup
};

