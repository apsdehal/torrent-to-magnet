var assert = require('assert');
var torrentToMagnet = require('./index.js');

it('should return correct magnet uri', function (done) {
	torrentToMagnet('http://torcache.net/torrent/C7753112704EA2CFC21352B56CED4D3CEB14F575.torrent?title=[kat.cr]horriblesubs.hi.scoool.seha.girl.07.720p.mkv', {}, function (err, uri) {
		assert.deepEqual(err, {});
		assert.deepEqual(uri, '');
		done();
	});
});

it('should return correct magnet uri', function (done) {
	torrentToMagnet('http://torcache.net/torrent/C7753112704EA2CFC21352B56CED4D3CEB14F575.torrent?title=[kat.cr]horriblesubs.hi.scoool.seha.girl.07.720p.mkv', {}, function (err, uri) {
		assert.deepEqual(err, {});
		assert.deepEqual(uri, '');
		done();
	});
});
