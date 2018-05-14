var print = require('./http-functions');

var options = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

 var x = function printHTML (html) {
 console.log(html.toUpperCase());
}

print(options, x);