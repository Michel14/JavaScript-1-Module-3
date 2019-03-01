function checkInput(){
	
	var anyNumber = /^\d{8}$/;
	var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	
	var vPhone = document.getElementById("phone").value;
	var vEmail = document.getElementById("email").value;

	var errorM;
	
	if(!anyNumber.test(vPhone)){		
		errorM = "Phone number is invalid\n";
	}
	
	if(!emailPattern.test(vEmail)){
		errorM += "Email address is invalid";
	}
	
	
	if(errorM != null){
		alert(errorM);

	}else{
		alert("Form submitted");		
	}
}
