module.exports = function getHTML (options, callback) {

  /* Add your code here */
  var acquire = require('https');
  var chunk = [];
   acquire.get(options, function (response) {

  // set encoding of received data to UTF-8
  response.setEncoding('utf8');

  // the callback is invoked when a `data` chunk is received
    response.on('data', function (data) {
    chunk.push(data);
  });

  // the callback is invoked when all of the data has been received
  // (the `end` of the stream)
  response.on('end', function() {
    console.log('Response stream complete.')
    callback(chunk.join(''))
  });
 });
}
  // function printHTML (html) {
  // console.log(html);
  // }

// getAndPrintHTML(options1);
// getHTML(options, printHTML);

