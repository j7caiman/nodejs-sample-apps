var Sequelize = require('sequelize');

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

var Message = sequelize.define('message', {
	body: Sequelize.STRING
});

Person.hasMany(Message);
Message.belongsTo(Person);


sequelize.sync({force: true}).then(function () {
	Person.create({
		name: "bubbles"
	}).then(function(person) {
		Message.create({
			body: "i like trains"
		}).then(function(message) {
			message.setPerson(person);
		})
	});
});