var Promise = require('promise');

var contrivedFunctionPromise = new Promise(function (resolve, reject) {
	function contrivedFunction() {
		return Math.random() < .5;
	}

	if (contrivedFunction()) {
		resolve("success!");
	} else {
		reject("much failure very error");
	}
});

contrivedFunctionPromise.then(console.log, console.log);