describe('is-url', function () {
  var assert = require('assert')
    , isUrl = require('is-url');

  var test = function (value, url, stricter) {
    assert(value === isUrl(url, stricter), 'failed on: ' + url);
  };

  it('should recognize valid urls', function () {
    test(true, 'http://google.com');
    test(true, 'https://google.com');
    test(true, 'http://www.google.com');
    test(true, 'http://google.com/something');
    test(true, 'http://google.com?q=query');
    test(true, 'http://google.com#hash');
    test(true, 'http://google.com/something?q=query#hash');
    test(true, 'http://google.co.uk');
    test(true, 'http://www.google.co.uk');
  });

  it('should recognize invalid urls', function () {
    test(false, 'http://');
    test(false, 'http://google');
    test(false, 'http://google.');
    test(false, 'google');
  });

  it('should be able to be stricter', function () {
    test(true, 'google.com');
    test(false, 'google.com', true);
  });
});