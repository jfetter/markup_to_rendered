"use strict";

$(document).ready(init);

function init () {
	

	$("#submit").on("click", sendMarkupInput);

	
}

//send input from the input box to the express file
function sendMarkupInput () {
	console.log("I'm in getMarkupInput")
	var inputText = $("#text");
	$.ajax("./app.js")
		.done(function(data, status){
			$.post(JSON.stringify(inputText));
			console.log(JSON.stringify(inputText));
debugger;
		})
		.fail(function(promise, status, error){
			console.log("promise:", promise);
			console.log("status:", status);
			console.log("error:", error);
		})
		.get(JSON.parse())
}
