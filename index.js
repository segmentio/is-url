var urlRegex = require('url-regex');

module.exports = function(string){
  return urlRegex().test(string);
}
