/*
<!--
Source:

- https://en.wikipedia.org/wiki/Python_(programming_language)
- https://en.wikipedia.org/wiki/C%2B%2B
- https://en.wikipedia.org/wiki/Java_(programming_language)
- https://en.wikipedia.org/wiki/SQL
- https://en.wikipedia.org/wiki/JavaScript
- https://en.wikipedia.org/wiki/Data_analysis


Using faker api:
It is being used to generate a random name that is then passed to the main page

-->
*/

var express = require("express");
var bodyParser = require("body-parser");
var faker = require("faker");
var app = express();


app.set('view engine', 'ejs');

app.use(express.static('public'));


app.use(express.static("css"));

app.use(bodyParser.urlencoded({extended:true}));



app.get("/", function(req, res){
	var randomName = faker.name.findName();
	res.render("home.ejs", {ranName:randomName});
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
