var https = require('https');

var options = {
  host:'www.example.org',
  path: '/'
};

var callback = function() {
  console.log('In response handler callback!');
}

console.log ("i'm about to make the request!");
https.request(options, callback).end();

console.log('I made the request!');