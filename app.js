// forecast api key 278c9d582cc1c0bd6968c962eaf54bd0
// pw: Wc8qNfr6pNZC
// get call from https://api.forecast.io/forecast/278c9d582cc1c0bd6968c962eaf54bd0/22.3636,91.8033

// 22.376594 91.846892

// Problem: Simply get weather forecast from forcast.io by zipcode

// Solution: Use node.js to get api call.

var https = require('https');

function printMessage (summary, precipType, temperature) {
	var message = " Current weather condition: \n Day summary: " + summary + ",\n Type: " + precipType + "\n Temperature: " + temperature;
	console.log(message);
}


var request = https.get("https://api.forecast.io/forecast/278c9d582cc1c0bd6968c962eaf54bd0/22.376594,91.846892", function(response) {
  var body = "";
  //Read the data
  response.on('data', function (chunk) {
    body += chunk;
  });
  response.on('end', function(){
    var profile = JSON.parse(body);
    printMessage(profile.currently.summary, profile.currently.precipType, profile.currently.temperature);
  });
});

