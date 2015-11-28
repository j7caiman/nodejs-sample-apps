/**
 * usage: from the command line, do:
 * node src/write.js <string> <string> <integer> <boolean>
 * i.e.
 * node src/write.js porkpie felt 3 true
 */

var pg = require('pg');

var connectionString = "postgres://jon:1234@localhost/class_example";
pg.connect(connectionString, function (err, client, done) {
	client.query('insert into hats values ($1, $2, $3, $4)', process.argv.splice(2), function (err) {
		if(err) {
			throw err;
		}

		done();
		pg.end(); // the client will idle for another 30 seconds, temporarily preventing the app from closing, unless this function is called
	});
});