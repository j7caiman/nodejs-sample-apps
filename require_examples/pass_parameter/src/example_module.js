var configuration;

function doStuff() {
	console.log("doing work...");
	console.log("configuration is: " + configuration);
}

function doStuff2() {
	console.log("doing other work...");
}

module.exports = function(config) {
	configuration = config;

	return {
		doStuff: doStuff,
		doStuff2: doStuff2
	}
};