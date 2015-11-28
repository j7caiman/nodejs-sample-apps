var query = require('./query_db');

query('select * from hats', function(error, result) {
	console.log(result.rows);
});