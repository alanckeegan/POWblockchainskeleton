const jayson = require('jayson');
const {startMining, stopMining} = require('./mine');

// create a server
const server = new jayson.Server({
  startMining: function(_, callback) {
    startMining();
    callback(null, 'Now Mining!');
  },
  stopMining: function(_, callback) {;
    stopMining();
    callback(null, 'Mining Stopped!');
  }
});

server.http().listen(3000);

