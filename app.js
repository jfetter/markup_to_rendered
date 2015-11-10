"use strict"

// serve the page the user views on port...
var PORT = 3001; 

// allows the use of express node library
var express = require("express");
// use this variable to employ "middleware" that is
// needed to translate code to a format that is readable
// to this app. 
var bodyParser = require('body-parser');
var morgan = require("morgan");
var marked = require("marked");

//shorthand for invoking express-- since its going to
// com up on almost every line
var app = express();

// defines jade as the format for the html file
app.set("view engine", "jade");

//allows me to use public (static) files
app.use(express.static('public'));
 // morgan dictates how req info is consoled
app.use(morgan('dev'));
// allows website? language
app.use(bodyParser.urlencoded({extended: true}));
// allows json to be used ... but I'm not using JSON
// app.use(bodyParser.json());

// on the home page render the index page (which will be in Jade)
// this is initated as soon as the browser arrives at localhost 3001
app.get("/", function(req, res){
	res.render("index");

})

//third step...
// the browser is requseting to post the input from the
// input field (ie the body). the app responds by converting it to
// mark up using the marked plugin and sends it back to the
// main. js page 
app.post("/marked", function(req, res){
	var outputHTML = marked(req.body.inputText);  
	res.send(outputHTML);  
		console.log(req.body.inputText);
});




app.listen(PORT);