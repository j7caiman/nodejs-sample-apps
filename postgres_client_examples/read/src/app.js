var pg = require('pg');

var connectionString = "postgres://jon:1234@localhost/class_example";
pg.connect(connectionString, function (err, client, done) {
	client.query('select * from hats', function (err, result) {
		console.log(result.rows);

		done();
		pg.end(); // the client will idle for another 30 seconds, temporarily preventing the app from closing, unless this function is called
	});
});