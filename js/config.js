'use strict';

var config = {
  networkName: 'testnet',
  network: {
    // key: 'lwjd5qra8257b9',
    //   This is for running local peerJs with params: ./peerjs  -p 10009  -k 'sdfjhwefh'
     key: 'sdfjhwefh',
     host: '192.168.1.100',
     port: 10009,
     path: '/',
    maxPeers: 10,
    debug: 3,
  },
  limits: {
    totalCopayers: 10,
    mPlusN: 15
  },
  wallet: {
    requiredCopayers: 2,
    totalCopayers: 3,
    spendUnconfirmed: 1,
    verbose: 1,
  },
  blockchain: {
    host: 'test.insight.is',
    port: 80
  },
  socket: {
    host: 'test.insight.is',
    port: 80
  },
  verbose: 1,
};

var log = function () {
  if (config.verbose) console.log(arguments);
}

