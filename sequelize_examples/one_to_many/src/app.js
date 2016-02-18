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


sequelize.sync().then(function () {
	Person.create({ // INSERT INTO "people" ("id","name") VALUES (DEFAULT,'bubbles') RETURNING *;
		name: "bubbles"
	}).then(function(person) { // INSERT INTO "messages" ("id","body","personId") VALUES (DEFAULT,'i like trains',1) RETURNING *;
		person.createMessage({
			body: "i like trains"
		});
	});
});