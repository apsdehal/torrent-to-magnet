# torrent-to-magnet [![Build Status](https://travis-ci.org/apsdehal/torrent-to-magnet.svg?branch=master)](https://travis-ci.org/apsdehal/torrent-to-magnet)

Generates a magnet uri from a torrent file

## Install

Install via
`npm install torrent-to-magnet`

## Usage

```js

var torrentToMagnet = require('torrent-to-magnet');

torrentToMagnet(torrentUrl, options, function (err, uri) {
	// Do something with uri here
});
```

## License

MIT

