var p= parseInt(localStorage.getItem("Amount"));  // retreiving the amount by the local storage
//if the user chooses ship delivery, an amount will be added to the total
let deliver = null;  
$("#ship").click(function() {
	if (deliver != null) {  // 
		if (deliver == false) {  //if the user does not choose this option it wont be added
			localStorage.setItem("Amount", p+= 56);
			alert("The total amount of your order is now R" +p) //creates an alert to show user the new total
			deliver = true;  //if the user chooses true , it will be added the amount
		};
	} else if (deliver == null) {     
		localStorage.setItem("Amount", p+= 45)       //it adds the amount to the total
		alert("The total amount of your order is now R" +p) //alert to show the total amount
		deliver = true; 
	};
});
//gives a different total when the user chooses postal
$("#postal").click(function() {
	if (deliver != null) {
		if (deliver == true) {
			localStorage.setItem("Amount", p-= 24);
			alert("The total amount of your order is now R" +p)
			deliver = false;
		};
	} else if (deliver == null) {
		localStorage.setItem("Amount", p+= 70)
		alert("The total amount of your order is now R" +p)
		deliver = false;
	};
});

//gives a diifferent total when the user chooses truck
$("#truck").click(function() {
	if (deliver != null) {
		if (deliver == true) {
			localStorage.setItem("Amount", p-= 45);
			alert("The total amount of your order is now R" +p)
			deliver = false;
		};
	} else if (deliver == null) {
		localStorage.setItem("Amount", p+= 67)
		alert("The total amount of your order is now R" +p)
		deliver = false;
	};
});

// gives a diiferenet total when the user chooses van
$("#van").click(function() {
	if (deliver != null) {
		if (deliver == true) {
			localStorage.setItem("Amount", p-= 13);
			alert("The total amount of your order is now R" +p)
			deliver = false;
		};
	} else if (deliver == null) {
		localStorage.setItem("Amount", p+= 24)
		alert("The total amount of your order is now R" +p)
		deliver = false;
	};
});

function submission() {  //creates a function
	var d = parseInt(localStorage.getItem("Amount"));  //gets the amount from the local storage
	var f = JSON.parse(localStorage.getItem("Items")); //gets the itams from the local storage

	localStorage.setItem("Amount", 0)  //it resets the total back to zero when you click submit
	localStorage.setItem("Items", JSON.stringify([]));  //removes items  when the submit button is clicked

	var ref = (Math.random() * 0xFFFFFF<<3).toString(16) //generates a  reference number when the user submits
	alert("The reference number for your order is " + ref) //alert
}

