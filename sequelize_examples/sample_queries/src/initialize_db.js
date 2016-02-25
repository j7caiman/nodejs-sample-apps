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


sequelize.sync({force: true}).then(function () {
	Promise.all([
		Person.create({
			firstName: "Alfred",
			lastName: "Hitchcock"
		}),
		Person.create({
			firstName: "Sylvester",
			lastName: "Stallone"
		}),
		Person.create({
			firstName: "Bananas",
			lastName: "in Pajamas"
		})
	]).then(function(result) {
		Promise.all([
			result[0].createMessage({
				body: "For me, the cinema is not a slice of life, but a piece of cake."
			}),
			result[0].createMessage({
				body: "Some of our most exquisite murders have been domestic, performed with tenderness in simple, homey places like the kitchen table."
			}),
			result[0].createMessage({
				body: "When an actor comes to me and wants to discuss his character, I say, 'It's in the script.' If he says, 'But what's my motivation?, ' I say, 'Your salary.'"
			}),
			result[1].createMessage({
				body: "Life's not about how hard of a hit you can give... it's about how many you can take, and still keep moving forward."
			}),
			result[1].createMessage({
				body: "It ain't over till its over."
			}),
			result[2].createMessage({
				body: "Bananas in pajamas are coming down the stairs,\nBananas in pajamas are coming down in pairs,\nBananas in pajamas are chasing teddy bears,\n'cos on Tuesdays they all try to catch them unawares!"
			})
		]).then(function() {
			console.log("database initialized and seeded with some values.");
		});
	});
});