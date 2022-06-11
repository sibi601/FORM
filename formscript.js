function formvalidation(){
	var name=document.signupform.username.value;
	var email=document.signupform.email.value;
	var password=document.signupform.password.value;
	var phnum=document.signupform.phone.value;
	var x=document.signupform.email.value;  
	var atposition=x.indexOf("@");  
	var dotposition=x.lastIndexOf(".");

	if(name==null || name==""){
		// document.getElementById('d').innerHTML="Name field is required!";
		alert("Name field is required!");
		return false;
	}
	else if(name.length<3){
		alert("Name field should have atleast 3 characters");
		return false;	
	}

	else if(name.match(/[0-9]/)){
		alert("Name field should not have any numbers");
		return false;
	}

	else if(email==null || email==""){
		alert("Email field is required!");
		return false;
	}

	else if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length || email.match('@')==false || email.match('.')==false) {
		alert("Enter a valid mail e-mail address");
		return false;
	}

	else if(phnum==null || phnum==""){
		alert("Phone field is required!");
		return false;
	}

	else if(phnum.length<10){
		alert("Phone field should have atleast 6 characters");
		return false;	
	}

	else if(isNaN(phnum)){
		alert("Enter a valid phone number");
	}

	else if(password==null || password==""){
		alert("Password field is required!");
		return false;
	}

	else if(password.length<6){
		alert("Password field should have atleast 6 characters");
		return false;	
	}

	else{
		document.write("Thanks for your submission");
	}

	}

	
