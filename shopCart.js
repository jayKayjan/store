var total = parseInt(localStorage.getItem("Amount"));  //creates a variable to retreive info from local storage
document.getElementById("finalAmount").append(total); //getting the id and adding total variable to it

var things = JSON.parse(localStorage.getItem("Items")); //getting the items name from the local storage
var j= document.getElementById("makeup"); //adding the item and the total to the html

things.forEach(function(q) {   //creating a function for each item and amounts
    var k = document.createElement("tr"); //creating an element table
    j.appendChild(k);      //adding items from the body into the above created table
 
    var i = document.createElement("td"); //creating variable for the table details
    i.innerHTML = q.description + " " +q.prices;  //the item details and prices are written to the html
    k.appendChild(i);   //adding items from the inner html to the table(variable k)
});

