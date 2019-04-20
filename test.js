var assert = require('assert');
var torrentToMagnet = require('./index.js');

var torrentUri = 'https://yts.am/torrent/download/F0391DF653474D5729959270F5C7518FEF0697E6';
var magnetUri = 'magnet:?xt=urn:btih:f0391df653474d5729959270f5c7518fef0697e6&dn=Glass+(2019)+%5BBluRay%5D+%5B720p%5D+%5BYTS.AM%5D&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce';

it('should return correct magnet uri', function (done) {
	this.timeout(15000);
	torrentToMagnet(torrentUri,
		{}, function (err, uri) {
		assert.ok(err === null);
		assert.deepEqual(uri, magnetUri);
		done();
	});
});
