var Sequelize = require('sequelize');
var sequelize = new Sequelize('class_example', 'jon', null, {
	host: 'localhost',
	dialect: 'postgres'
});

var Post = sequelize.define('post', {
	title: Sequelize.STRING,
	body: Sequelize.TEXT
});

sequelize.sync().then(function () {
	Post.create({
		title: 'birds are chirpy',
		body: 'chirp chirp'
	});

	Post.create({
		title: 'rabbits jump pretty high',
		body: 'but not as high as cats'
	});
});