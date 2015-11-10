"use strict";

$(document).ready(init);

function init () {

	$("#submit").on("click", sendMarkupInput);
	
}

//once app.js renders the jade index page 
// they input text, click a button and...

function sendMarkupInput () {
//send input from the input box to the express file
// this is thing 2
	var inputText = {inputText: $("#text").val()}
	console.log("texty text text:" , inputText);
	$.post("/marked",  inputText, function(){
		console.log("got through to server");
	})
			.done(function(data){		
				console.log(data);
// 				//final step (4), take the converted markup comes back
// // as data and is converted into html then
// // given to the output field to use as its
// // html...  
 			$("#output").empty().append($.parseHTML(data));
		}) 
	// })
		// .fail(function(error){
		// 	console.log("error:", error);
		// });	
}

