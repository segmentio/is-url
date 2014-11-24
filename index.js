var urlRegex = require('url-regex');

module.exports = function(input){
  if (!input) return false;
  if (typeof(input) !== "string") return false;

  // Special cases
  if (input.indexOf("http://0.0.0.0") === 0) return true;
  if (input.indexOf("http://127.0.0.1") === 0) return true;

  return urlRegex().test(input);
}
