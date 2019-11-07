var dd = parseInt(localStorage.getItem("Amount")); //creating a variable to get theamount from the localstorage

var s = document.getElementById("price") //creating variable to retrieve element 

s.addEventListener("click", function() { //attaches an event handler to an element without overwriting existing event handlers.
	localStorage.setItem("Amount", dd * 0.25); //getting the amount from local storage and multiplying it by 25%
	alert("After receiving a discount, the total of your purchases is R" + dd);
});  //creates alerts 


