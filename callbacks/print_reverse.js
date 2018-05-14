var print = require('./http-functions');

var options = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

 var x = function printHTML (html) {
 console.log(Array.from(html).reverse().join(''));
}

print(options, x);