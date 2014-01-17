describe('is-url', function () {

var isUrl = require('..');

describe('valid', function () {
  it('http://google.com', function () {
    isUrl('http://google.com').should.be.true;
  });

  it('https://google.com', function () {
    isUrl('https://google.com').should.be.true;
  });

  it('ftp://google.com', function () {
    isUrl('ftp://google.com').should.be.true;
  });

  it('http://www.google.com', function () {
    isUrl('http://www.google.com').should.be.true;
  });

  it('http://google.com/something', function () {
    isUrl('http://google.com/something').should.be.true;
  });

  it('http://google.com?q=query', function () {
    isUrl('http://google.com?q=query').should.be.true;
  });

  it('http://google.com#hash', function () {
    isUrl('http://google.com#hash').should.be.true;
  });

  it('http://google.com/something?q=query#hash', function () {
    isUrl('http://google.com/something?q=query#hash').should.be.true;
  });

  it('http://google.co.uk', function () {
    isUrl('http://google.co.uk').should.be.true;
  });

  it('http://www.google.co.uk', function () {
    isUrl('http://www.google.co.uk').should.be.true;
  });

  it('http://google.cat', function () {
    isUrl('http://google.cat').should.be.true;
  });

  it('https://d1f4470da51b49289906b3d6cbd65074@app.getsentry.com/13176', function () {
    isUrl('https://d1f4470da51b49289906b3d6cbd65074@app.getsentry.com/13176').should.be.true;
  });

  it('http://0.0.0.0', function () {
    isUrl('http://0.0.0.0').should.be.true;
  });

  it('http://localhost', function () {
    isUrl('http://localhost').should.be.true;
  });
  
  it('http://localhost:4000', function () {
    isUrl('http://localhost:4000').should.be.true;
  });
});

describe('invalid', function () {
  it('http://', function () {
    isUrl('http://').should.be.false;
  });

  it('http://google', function () {
    isUrl('http://google').should.be.false;
  });

  it('http://google.', function () {
    isUrl('http://google.').should.be.false;
  });

  it('google', function () {
    isUrl('google').should.be.false;
  });

  it('google.com', function () {
    isUrl('google.com').should.be.false;
  });
});

});
