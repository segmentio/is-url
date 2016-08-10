/**
 * Expose `isUrl`.
 */

module.exports = isUrl;

/**
 * Matchers.
 */

var protocol = '[a-z]\\:\\/\\/|(\\/\\/)';
var domain = '[a-zA-Z@:0-9_-]+';
var other = '[a-zA-Z/0-9$-/:-?{#-~!"^_`\\[\\]]+';
var ext = '\\.' + other;
var port = '\\:[0-9]+';
var ip = '([a-zA-Z0-9]{4}:)+[a-zA-Z0-9]';

/**
 * Loosely validate a URL `string`.
 * @param {String} string
 * @param {Object} [options] - defaults to `{}`
 * - **options.requireProtocol** {Boolean} - set to true if you only want URLs with a protocol to be considered valid. Defaults to `false`
 * @return {Boolean}
 */
function isUrl (string, opts) {
  opts = opts || {}
  var reStr = '^' + protocol + ((opts.requireProtocol) ? '' : '?') + '(' + domain + ext + '|localhost|' + ip + ')' + '(' + port + ')?' + '(' + other + ')' + '?$'
  // console.log('reStr', reStr)
  var re = new RegExp(reStr)
  return typeof string === 'string' && re.test(string)
}
