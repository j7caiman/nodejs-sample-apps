var query = require('./query_db');

query('insert into hats values($1, $2, $3, $4)', ['turkey', 'blood', 12, false]);