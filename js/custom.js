$('.dDown').dropdown()

$(document).ready(function(){
	$("#privateEvent").hide();
	$("#childEvent").hide();
});

$(document).ready(function(){
	$(".dropdown-menu li a").click(function(){
	  var selText = $(this).text();
	  console.log(selText);
	  
	  if(selText == 'Kiddies' || selText == 'Day Visitors' || selText =='School Outing'){
		$("#childEvent").show();
		$("#privateEvent").hide();
	  } else if(selText == 'Private Function'){
		$("#privateEvent").show();
		$("#childEvent").hide();
	  } else{
	  	$("#privateEvent").hide();
		$("#childEvent").hide();
	  }
	});
});

$(document).ready(function(){
	$("#sMit").click(function(){
		var emailAddress = $("#emailAddress").val();
		if(emailAddress == ""){
			alert("Enter an email address");
		} else{
			//console.log(x);
			var atpos = emailAddress.indexOf("@");
			var dotpos = emailAddress.lastIndexOf(".");
			if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=emailAddress.length) {
				alert("Not a valid e-mail address");
				return false;
			} else {
				
			}
		}
		
		var name = $("#nameValue").val();
		var surename = $("#surNameValue").val();
		var cell = $("#cellValue").val();
		var additionalInfo = $("#additionInfValue").val();
		
		var emailBody = "Name: " + name + "\nSurname: " + surename + "\nCell: " + cell + "\nAdditional Information: " + additionalInfo;
		
		var link = "mailto:barnesmike@outlook.com"
			 + "&subject=" + escape("Booking Enquiry")
			 + "&body=" + emailBody;

		window.location.href = link;
	})
});
