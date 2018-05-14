function getAndPrintHTML (requestOptions) {

  /* Add your code here */
  var acquire = require('https');
  var chunk = [];
   acquire.get(requestOptions, function (response) {

  // set encoding of received data to UTF-8
  response.setEncoding('utf8');

  // the callback is invoked when a `data` chunk is received
    response.on('data', function (data) {
      chunk.push(data);
  });

  // the callback is invoked when all of the data has been received
  // (the `end` of the stream)
  response.on('end', function() {
    console.log('Response stream complete.', chunk.join(''));
  });

});
}

 // var options1 = {
 //    host: 'sytantris.github.io',
 //    path: '/http-examples/step1.html'
 //  };

   var options2 = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

// getAndPrintHTML(options1);
getAndPrintHTML(options2);
