var pg = require('pg');
var connectionString = "postgres://jon@localhost/class_example";

module.exports = function (queryString, queryParameters, onComplete) {
	if (typeof queryParameters == 'function') { // normalize parameters
		onComplete = queryParameters;
		queryParameters = [];
	}

	pg.connect(connectionString, function (err, client, done) {
		if (err) {
			console.log('error: connection to database failed. connection string: \"' + connectionString + '\" ' + err);

			if (client) {
				done(client);
			}

			if (onComplete !== undefined) {
				onComplete(err);
			}

			return;
		}

		client.query(queryString, queryParameters, function (err, result) {
				if (err) {
					done(client);
					console.log('error: query failed: \"' + queryString + '\", \"' + queryParameters + "\" " + err);
				} else {
					done();
				}

				if (onComplete !== undefined) {
					onComplete(err, result);
				}
			}
		);
	});
};