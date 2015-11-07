var assert = require('assert');
var torrentToMagnet = require('./index.js');

it('should return correct magnet uri', function (done) {
	this.timeout(15000);
	torrentToMagnet('https://torcache.net/torrent/5027D8663961CF9A7955AA889E47835E45F458D5.torrent?title=[kat.cr]el.hombre.hormiga.antman.01.edicion.especial.metropoli.dos.portadas.cbr.spanish', 
		{}, function (err, uri) {
		assert.ok(err === null);
		assert.deepEqual(uri, 'magnet:?xt=urn:btih:5027d8663961cf9a7955aa889e47835e45f458d5&dn=Antman+01+Edicion+Especial+Metropoli+dos+portadas.cbr&tr=udp%3A%2F%2Fopen.demonii.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.ccc.de%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.istole.it%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.publicbt.com%3A80%2Fannounce');
		done();
	});
});
