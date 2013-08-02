var isUrl = require('..');

suite('is-url');

test('should recognize valid urls', function () {
  isUrl('http://google.com').should.be.true;
  isUrl('https://google.com').should.be.true;
  isUrl('http://www.google.com').should.be.true;
  isUrl('http://google.com/something').should.be.true;
  isUrl('http://google.com?q=query').should.be.true;
  isUrl('http://google.com#hash').should.be.true;
  isUrl('http://google.com/something?q=query#hash').should.be.true;
  isUrl('http://google.co.uk').should.be.true;
  isUrl('http://www.google.co.uk').should.be.true;
});

test('should recognize invalid urls', function () {
  isUrl('http://').should.be.false;
  isUrl('http://google').should.be.false;
  isUrl('http://google.').should.be.false;
  isUrl('google').should.be.false;
});

test('should be able to be stricter', function () {
  isUrl('google.com').should.be.true;
  isUrl('google.com', true).should.be.false;
});