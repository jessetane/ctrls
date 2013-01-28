// our service in this example is a nodejs http server
require('http').createServer(function(req, res) {
  res.end(process.env.RESPONSE)
}).listen(process.env.PORT, function() {
  console.log('http server listening on port ' + process.env.PORT)
})
