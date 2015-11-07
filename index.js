var request = require('request');
var parseTorrent = require('parse-torrent');
var zlib = require('zlib');
var extend = require('extend');

module.exports = function (url, options, callback) {
  // Check if callback is passed
  if (!callback) {
    callback = options;
    options = {};
  }

  // Make sure callback is async no matter what
  var asyncCallback = function(err, result, data) {
    process.nextTick(function() {
      callback(err, result, data);
    });
  };

  var onData = function(err, data) {
    if (err) {
      return asyncCallback(err);
    }
    try {
      var result = parseTorrent(data);
      var uri = parseTorrent.toMagnetURI(result);
    } catch (err) {
      return asyncCallback(err);
    }
    asyncCallback(err, uri);
  };

  var onResponse = function(err, response) {
    if (err) {
      return asyncCallback(err);
    }
    if (response.statusCode >= 400) {
      return asyncCallback(new Error('Bad Response: ' + response.statusCode));
    }
    if (response.headers['content-encoding'] === 'gzip') {
      return zlib.gunzip(response.body, onData);
    }
    onData(null, response.body);
  };


  var httpRegex = new RegExp(/^https?:/);

  if (httpRegex.test(url)) {
  	return request(extend({ url: url, encoding: null }, options), onResponse);
  }

};