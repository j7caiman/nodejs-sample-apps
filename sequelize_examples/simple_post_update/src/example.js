var Sequelize = require('sequelize');
var sequelize = new Sequelize('class_example', 'jon', null, {
	host: 'localhost',
	dialect: 'postgres'
});

var Post = sequelize.define('post', {
	title: Sequelize.STRING,
	body: Sequelize.TEXT
});

// more examples here: http://docs.sequelizejs.com/en/latest/docs/models-usage/
Post.findOne({
	where: {
		title: 'birds are chirpy'
	}
}).then(function (post) {
	post.update({
		title: 'birds are REALLY chirpy',
		body: 'for real yo'
	});
});