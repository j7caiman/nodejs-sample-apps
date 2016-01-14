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

var Person = sequelize.define('person', {
	name: Sequelize.STRING
});

var Language = sequelize.define('language', {
	name: Sequelize.STRING
});

var Fluency = sequelize.define('fluency', {
	level: Sequelize.STRING
});

Person.belongsToMany(Language, {through: Fluency});
Language.belongsToMany(Person, {through: Fluency});

var app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.set('views', './src/views');
app.set('view engine', 'jade');

app.get('/', function (request, response) {
	Promise.all([
		Person.findAll(),
		Language.findAll(),
		Fluency.findAll()
	]).then(function (entities) {
		var persons = entities[0].map(function (row) {
			return {
				id: row.dataValues.id,
				name: row.dataValues.name
			};
		});

		var languages = entities[1].map(function (row) {
			return {
				id: row.dataValues.id,
				name: row.dataValues.name
			};
		});

		var fluencys = entities[2].map(function (row) {
			var personName = persons.find(function (person) {
				return person.id === row.dataValues.personId;
			}).name;

			var languageName = languages.find(function (language) {
				return language.id === row.dataValues.languageId;
			}).name;

			return {
				personId: row.dataValues.personId,
				personName: personName,
				languageId: row.dataValues.languageId,
				languageName: languageName,
				level: row.dataValues.level
			};
		});

		response.render('index', {
			persons: persons,
			languages: languages,
			fluencys: fluencys
		});
	});
});


app.post('/persons', function (request, response) {
	Person.create({
		name: request.body.name
	}).then(function () {
		response.redirect('/');
	})
});

app.post('/languages', function (request, response) {
	Language.create({
		name: request.body.name
	}).then(function () {
		response.redirect('/');
	})
});

app.post('/fluencys', function (request, response) {
	Fluency.create({
		level: request.body.level,
		languageId: request.body.languageId,
		personId: request.body.personId
	}).then(function () {
		response.redirect('/');
	}, function () {
		response.redirect('/');
	});
});


sequelize.sync().then(function () {
	var server = app.listen(3000, function () {
		console.log('Example app listening on port: ' + server.address().port);
	});
});