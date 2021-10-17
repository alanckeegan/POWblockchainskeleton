const jayson = require('jayson');
const mine = require('../mine');;

const client = jayson.Client.http({
  port: 3000
});


client.request('stopMining', [], function(err, response) {
  if(err) throw err;
  console.log(response.result); // 2
});