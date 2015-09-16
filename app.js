// forecast api key 278c9d582cc1c0bd6968c962eaf54bd0
// pw: Wc8qNfr6pNZC
// get call from https://api.forecast.io/forecast/278c9d582cc1c0bd6968c962eaf54bd0/22.3636,91.8033

// Problem: Simply get weather forecast from forcast.io by zipcode

// Solution: Use node.js to get api call.

var http = require('http');

function printMessage (summary, precipType, temperature) {
	var message = "current weather condition: \nDay summary: " + summary + ",\n Type: " + precipType + "\n Temperature: " + temperature;
	console.log(message);
}


var request = http.get("http://api.forecast.io/forecast/278c9d582cc1c0bd6968c962eaf54bd0/22.3636,91.8033", function(res) {
  console.log("Got response: " + res.statusCode);
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});

