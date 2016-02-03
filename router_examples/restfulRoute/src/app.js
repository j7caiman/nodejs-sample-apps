var Sequelize = require('sequelize');
var express = require('express');
var bodyParser = require('body-parser');

var sequelize = new Sequelize('class_example', 'jon', null, {
	host: 'localhost',
	dialect: 'postgres',
	define: {
		timestamps: false
	}
});

var User = sequelize.define('user', {
	name: Sequelize.STRING,
	email: Sequelize.STRING,
	password: Sequelize.STRING
});

var app = express();

app.set('views', './src/views');
app.set('view engine', 'jade');

app.get('/', function (request, response) {
	response.render('index');
});

// show all users
app.get('/users', function (request, response) {
	User.findAll().then(function (users) {
		users = users.map(function (userRow) {
			var columns = userRow.dataValues;
			return {
				id: columns.id,
				name: columns.name,
				email: columns.email
			}
		});

		response.render('users/index', {
			users: users
		});
	});
});

// display a form to create a new user
app.get('/users/new', function (request, response) {
	response.render('users/new');
});


// show a specific user
// note: this function was placed after the '/users/new' route, otherwise it reads in "new" for the ":id" parameter
app.get('/users/:id', function (request, response) {
	var requestParameters = request.params;
	User.findById(requestParameters.id).then(function (user) {
		response.render('users/show', {
			user: user
		});
	});
});

// create the new user
app.post('/users', bodyParser.urlencoded({extended: true}), function (request, response) {
	User.create({
		name: request.body.name,
		email: request.body.email,
		password: request.body.password
	}).then(function (user) {
		response.redirect('/users/' + user.id);
	});
});


sequelize.sync().then(function () {
	var server = app.listen(3000, function () {
		console.log('Example app listening on port: ' + server.address().port);
	});
});