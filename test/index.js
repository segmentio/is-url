
try {
  var url = require('is-url');
} catch (e) {
  var url = require('..');
}

var assert = require('assert');

describe('is-url', function () {
  describe('valid', function () {

    it('http://www.google.com', function () {
      assert(url('http://www.google.com'));
    });

    it('http://google.com', function () {
      assert(url('http://google.com'));
    });

    it('http://google.com/something', function () {
      assert(url('http://google.com/something'));
    });

    it('http://google.com?q=query', function () {
      assert(url('http://google.com?q=query'));
    });

    it('http://google.com#hash', function () {
      assert(url('http://google.com#hash'));
    });

    it('http://google.com/something?q=query#hash', function () {
      assert(url('http://google.com/something?q=query#hash'));
    });

    it('http://google.co.uk', function () {
      assert(url('http://google.co.uk'));
    });

    it('http://www.google.co.uk', function () {
      assert(url('http://www.google.co.uk'));
    });

    it('http://google.cat', function () {
      assert(url('http://google.cat'));
    });

    it('http://0.0.0.0', function () {
      assert(url('http://0.0.0.0'));
    });

    it('http://192.11.222.444', function () {
      assert(url('http://192.11.222.444'));
    });

    it('http://192.11.222.444/path', function () {
      assert(url('http://192.11.222.444/path'));
    });

    it('http://2001:0db8:0000:0042:0000:8a2e:0370:7334', function () {
      assert(url('http://2001:0db8:0000:0042:0000:8a2e:0370:7334'));
    });

    it('http://2001:0db8:0000:0042:0000:8a2e:0370:7334/path', function () {
      assert(url('http://2001:0db8:0000:0042:0000:8a2e:0370:7334/path'));
    });

    it('0.0.0.0', function () {
      assert(url('0.0.0.0'));
    });

    it('192.11.222.444', function () {
      assert(url('192.11.222.444'));
    });

    it('192.11.222.444/path', function () {
      assert(url('192.11.222.444/path'));
    });

    it('2001:0db8:0000:0042:0000:8a2e:0370:7334', function () {
      assert(url('2001:0db8:0000:0042:0000:8a2e:0370:7334'));
    });

    it('2001:0db8:0000:0042:0000:8a2e:0370:7334/path', function () {
      assert(url('2001:0db8:0000:0042:0000:8a2e:0370:7334/path'));
    });

    it('www.google.com', function () {
      assert(url('www.google.com'));
    });

    it('google.com', function () {
      assert(url('google.com'));
    });

    it('//google.com', function () {
      assert(url('//google.com'));
    });

    it('localhost', function () {
      assert(url('localhost'));
    });

    it('http://localhost', function () {
      assert(url('http://localhost'));
    });

    it('https://localhost:342/a/path?query=true#hash', function () {
      assert(url('https://localhost:342/a/path?query=true#hash'));
    });

    it('localhost:342/a/path', function () {
      assert(url('https://localhost:342/a/path?query=true#hash'));
    });

    it('https://google.com', function () {
      assert(url('https://google.com'));
    });

    it('https://d1f4470da51b49289906b3d6cbd65074@app.getsentry.com/13176', function () {
      assert(url('https://d1f4470da51b49289906b3d6cbd65074@app.getsentry.com/13176'));
    });

    it('ftp://google.com', function () {
      assert(url('ftp://google.com'));
    });

    it('postgres://u:p@example.com:5702/db', function () {
      assert(url('postgres://u:p@example.com:5702/db'));
    });

    it('redis://:123@174.129.42.52:13271', function () {
      assert(url('redis://:123@174.129.42.52:13271'));
    });

    it('mongodb://u:p@example.com:10064/db', function () {
      assert(url('mongodb://u:p@example.com:10064/db'));
    });

    it('ws://chat.example.com/games', function () {
      assert(url('ws://chat.example.com/games'));
    });

    it('wss://secure.example.com/biz', function () {
      assert(url('wss://secure.example.com/biz'));
    });

  });

  describe('invalid', function () {
    it('http://', function () {
      assert(!url('http://'));
    });

    it('http://google', function () {
      assert(!url('http://google'));
    });

    it('http://google.', function () {
      assert(!url('http://google.'));
    });

    it('google', function () {
      assert(!url('google'));
    });

  });

  describe('protocol required', function () {
    it('google.com', function () {
      assert(!url('google.com', { requireProtocol: true }));
    });

    it('192.11.222.444/path', function () {
      assert(!url('192.11.222.444/path', { requireProtocol: true }));
    });

    it('2001:0db8:0000:0042:0000:8a2e:0370:7334', function () {
      assert(!url('2001:0db8:0000:0042:0000:8a2e:0370:7334', { requireProtocol: true }));
    });
  })

});
