"use strict"

// serve the page the user views on port...
var PORT = 3000; 

// use this variable to employ "middleware" that is
// needed to translate code to a format that is readable
// to this app. 
var bodyParser = require('body-parser');
var morgan = require("morgan");


var markupInput;


// allows the use of express node library
var express = require("express");
//shorthand for invoking express-- since its going to
// com up on almost every line
var app = express();

// defines jade as the format for the html file
app.set("view engine", "jade");

//allows me to use public (static) files
app.use(express.static('public'));

 // morgan dictates how req info is consoled
app.use(morgan('dev'));
// allows json to be used 
app.use(bodyParser.json());
// allows website? language
app.use(bodyParser.urlencoded({extended: true}));

// on the home page render the index page (which will be in Jade)
app.get("/", function(req, res){
	res.render("index");

})

// get the info from the input field and convert it to express speak
app.post("/", function(req, res){
	markupInput = bodyParser.req; 
})




app.listen(PORT);