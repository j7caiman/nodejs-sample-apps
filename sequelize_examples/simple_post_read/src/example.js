var Sequelize = require('sequelize');
var sequelize = new Sequelize('class_example', 'jon', null, {
	host: 'localhost',
	dialect: 'postgres'
});

var Post = sequelize.define('post', {
	title: Sequelize.STRING,
	body: Sequelize.TEXT
});

Post.findAll().then(function (posts) {
	var data = posts.map(function (post) {
		return {
			title: post.dataValues.title,
			body: post.dataValues.body
		};
	});

	console.log("printing results:");
	console.log(data);
});