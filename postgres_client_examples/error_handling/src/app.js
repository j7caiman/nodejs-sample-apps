var http = require('http');
var pg = require('pg');

var connectionString = "postgres://jon:1234@localhost/class_example";
pg.connect(connectionString, function (err, client, done) {
	if (err) {
		if (client) {
			done(client);
		}
		return;
	}

	client.query('select * from hats', function (err, result) {
		if (err) {
			done(client);
			return;
		} else {
			done();
		}

		console.log(result.rows);
	});
});