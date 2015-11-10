"use strict";

$(document).ready(init);

function init () {
	

	$("#submit").on("click", getMarkupInput);

	
}

function getMarkupInput (event) {
	$.get("../app.js")
		.done(function(data, status){
			console.log(data);
debugger;
		var markupInput;
		})
		.fail(function(promise, status, error){
			console.log("promise:", promise);
			console.log("status:", status);
			console.log("error:", error);
		})
}
