var pg = require('pg');

var selectStuffFromTable = function(tableName) {
	return new Promise(function(resolve, reject) {
		pg.connect("postgres://jon@localhost/class_example", function(err, client, done) {
			if(err) {
				reject(err);
				done();
				return;
			}

			client.query("select * from " + tableName, function(err, result) {
				if(err) {
					reject(err);
					done();
					return;
				}

				resolve(result.rows);
				done();
			});
		});
	});
};


// resolve handler called
selectStuffFromTable("hats").then(function(rows) {
	console.log("HATS :D :D ");
	console.log("number of rows: " + rows.length);
	console.log(rows);
}, function(error) {
	console.log("oh no an error :c");
	console.log(error);
});


// reject handler called (because 'flats' doesn't exist
selectStuffFromTable("flats").then(function(rows) {
	console.log("FLATS :D :D ");
	console.log("number of rows: " + rows.length);
	console.log(rows);
}, function(error) {
	console.log("oh no an error :c");
	console.log(error);
});