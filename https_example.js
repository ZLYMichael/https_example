var https = require('https');

var options = {
  host:'www.example.org',
  path: '/'
};

var callback = function(response) {
  console.log('In response handler callback!');

  response.on('data', function(chunk) {
    console.log('[-- CHUNK OF LENGH' + chunk.length + '--]');
    console.log(chunk.toString());
  });
}

console.log ("i'm about to make the request!");
https.request(options, callback).end();

console.log('I made the request!');