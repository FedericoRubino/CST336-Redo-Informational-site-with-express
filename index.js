/*
	1. Every ejs hile has an extension .ejs
	2. NodeJS looks into a folder "views" to render a Page
	3. Tell NodeJS to use the ejs as page 
*/

var express = require("express");
var bodyParser = require("body-parser")
var app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));


app.use(express.static("css"));

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
	res.render("home.ejs");
});

app.get("/languages", function(req, res){
	res.render("languages.ejs");
});
app.get("/datascience", function(req, res){
	res.render("datascience.ejs");
});
app.get("/bigdata", function(req, res){
	res.render("bigdata.ejs");
});

app.get("/*", function(req, res){
	res.render("error.ejs");
});

//3000 is for localhost and 8080 is for heroku
app.listen(process.env.PORT || 3000, function(){
	console.log("Server is running...");
});
