function Validate() {	
	//form inputs
	var firstName = document.getElementById('firstName');
	var lastName = document.getElementById('lastName');
	var email = document.getElementById('email');
	var password = document.getElementById('password');
	
	//each form that is valid
	//	-	green input with green border
	//for an ivalid entry
	//	-	red input with red border
	//whether first is completed or not
	//	-	show a message?
	
	if (firstName.value == ""){
		ShowResults('firstName-image', 'firstName-message', firstName.id, true);
	}
	else{
		ShowResults('firstName-image', 'firstName-message', firstName.id, false);
	//	firstName.className += " success";
	}
	
	if (lastName.value == ""){
		ShowResults('lastName-image', 'lastName-message', lastName.id, true);
	}
	else{
		ShowResults('lastName-image', 'lastName-message', lastName.id, false);
	//	lastName.className += " success";
	}
	
	if (email.value == ""){
		document.getElementById('email-message').innerHTML = "<em>Email cannot be empty</em>";
		ShowResults('email-image', 'email-message', email.id, true);
	}
	else{
		if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value) === false) {
			document.getElementById('email-message').innerHTML = "<em>Looks like this input is not an email.</em>";
			ShowResults('email-image', 'email-message', email.id, true);
		}
		else{
		//	email.className += " success";
		ShowResults('email-image', 'email-message', email.id, false);
		}		
	}
	
	if (password.value == ""){
		ShowResults('password-image', 'password-message', password.id, true);
	}
	else{
		ShowResults('password-image', 'password-message', password.id, false);
	//	password.className += " success";
	}	
}

function ShowResults(imageID, messageID, inputID, errorFound){	
	if (errorFound){
		document.getElementById(imageID).classList.remove("icon");
		document.getElementById(messageID).classList.remove("error-message");
		document.getElementById(inputID).classList.remove("success");
		document.getElementById(inputID).classList.add("error-border");
	}
	else{
		document.getElementById(inputID).classList.remove("error-border");
		document.getElementById(inputID).classList.add("success");
		document.getElementById(imageID).classList.add("icon");
		document.getElementById(messageID).classList.add("error-message");		
	}
	
}