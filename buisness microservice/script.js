//EVENT LISTENER FOR BUTTON ON CLICK
    var event1 = document.getElementById("button1");
    event1.addEventListener('click',screeningProcess,false);
    
   
function screeningProcess() {
//	alert("testing")
	var age = parseInt(document.getElementById("age").value);
	var weight = parseInt(document.getElementById("weight").value);
	var height = parseInt(document.getElementById("height").value);
	
	var tooOld = "Your height and weight is fine but unfortunatly you are above the maximum age limit.";
	var oldTall = "Your weight is fine but unfortunatly your are above the maximum age & heightlimit.";
	var oldTallLight = "Unfortunatly you are above the maximum age & height limit and below the minimum weight limit.";
	var oldTallHeavy = "Unfortunatly you are above the maximum age, weight & height limit.";
	var oldSmall = "Your weight is fine but unfortunatly you are above the maximum age limit and below the minimum height requirement.";
	var oldSmallLight = "Unfortunatly you are above the maximum age limit and below the minimum height and weight requirements.";
	var oldSmallHeavy = "Unfortunatly you are above the maximum age and weight limits, and below the minimum height requirement. ";
	var oldHeavy = "Your height is fine but unfortunatly you are above the maximum age and weight limit.";
	var oldHeavyTall = "Unfortunatly you are above the maximum age, weight and height limits.";
	var oldHeavySmall = "Unfortunatly you are above the maximum age and weight limits, and below the minimum height requirement.";
	var oldLight = "Your height is fine but unfortunatly you are above the maximum age and weight limits.";
	var oldLightTall = "Unfortunatly you are above the maximum age and height limits, and below the minimum weight requirement.";
	var oldLightSmall = "Unfortunatly you are above the maximum age limit, and below the minimum weight and height requirements.";

	var tooYoung = "Your height and weight is fine but unfortunatly you are below the minimum age limit.";
	var youngTall = "Your weight is fine but unfortunatly your are below the maximum age limit and above the maximum height requirement.";
	var youngTallLight = "Unfortunatly you are above the maximum height limit and below the minimum age and weight requirement.";
	var youngTallHeavy = "Unfortunatly you are below the minimum age limit and above the maximum height and weight requirements.";
	var youngSmall = "Your weight is fine but unfortunatly you are below the minimum age and height requirement.";
	var youngSmallLight = "Unfortunatly you are below the minimum age, height and weight requirements.";
	var youngSmallHeavy = "Unfortunatly you are below the minimum age and height limit and abouve the maximum weight requirement.";
	var youngHeavy = "Your height is fine but unfortunatly your are below the maximum age limit and above the maximum height requirement.";
	var youngHeavyTall = "Unfortunatly you are below the minimum age limit and above the height and weight requirements.";
	var youngHeavySmall = "Unfortunatly you are below the minimum age and height limits and above the maximum weight requirements.";
	var youngLight = "Your height is fine but unfortunatly you are below the minimum age and weight requirements.";
	var youngLightTall = "Unfortunatly you are below the minimum age and weight limits and above the maximum height requirement.";
	var youngLightSmall = "Unfortunatly you are below the minimum age, height and weight requirements.";
	
	
	if (age < 26 && weight > 49 && weight < 91 && height > 149 && height < 191) 
	// if they are within the requirements
		
	{
		if (weight > 49 && weight < 91) {
		// if they pass the weight test 
			
					//passed the weight so must have failed the height test
					  document.getElementById("result").innerHTML = "you failed the height test"; 
				}
		else {
					
		document.getElementById("result").innerHTML = "you failed the weight test"; 
		// failed the weight test										
		}
		
		
	}
	
	else if (age > 27){
	// if too old	
	
		if (weight > 49 && weight < 91) {
		// if they are the right weight
			
					//passed the weight test so must have failed the height test
					  document.getElementById("result").innerHTML = "you failed the height and age test"; 
				}
		
		            // is they are right height
					else if (height > 149 && height < 191){
					document.getElementById("result").innerHTML = "you failed the weight and age test"; 
						
						
														
				}
		            else {
					document.getElementById("result").innerHTML = "you failed the age test"; 
					// failed the weight test										
				}
		
		
//		document.getElementById("result").innerHTML = "you too old"; 
	}

    else 
	// the user passed the test	
	{
	document.getElementById("result").innerHTML = "You passed";
    }


	
	
	
	
	
}




//Participants must to be less than 26 years of age
//Participants must be greater than 50kg and less than 90kg in weight
//Participants must be between 150cm and 190cm in height