var Sequelize = require('sequelize');

var sequelize = new Sequelize('class_example', 'jon', null, {
	host: 'localhost',
	dialect: 'postgres',
	define: {
		timestamps: false
	}
});

var Person = sequelize.define('person', {
	firstName: Sequelize.STRING,
	lastName: Sequelize.STRING
});

var Message = sequelize.define('message', {
	body: Sequelize.STRING
});

Person.hasMany(Message);
Message.belongsTo(Person);

// Some sample queries for you to play around with:

Person.findAll({
	include: [Message]
}).then(function(result) {
	console.log("\n\nresult of: People including Messages");
	console.log(JSON.stringify(result, null, 2)); // note: the other parameters in JSON.stringify format the output so that it is easier to read.
});

Message.findAll({
	include: [Person]
}).then(function(result) {
	console.log("\n\nresult of: Messages including People");
	console.log(JSON.stringify(result, null, 2));
});

//Person.findOne({
//	where: {
//		firstName: "Sylvester",
//		lastName: "Stallone"
//	}
//}).then(function(result) {
//	console.log("\n\nresult of: findOne person");
//	console.log(JSON.stringify(result, null, 2));
//});

//Person.findOne({
//	include: [Message],
//	where: {
//		firstName: "Sylvester",
//		lastName: "Stallone"
//	}
//}).then(function(result) {
//	console.log("\n\nresult of: findOne person and include his messages");
//	console.log(JSON.stringify(result, null, 2));
//});