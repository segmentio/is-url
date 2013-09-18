
/**
 * Expose `isUrl`.
 */

module.exports = isUrl;


/**
 * Matcher.
 */

var matcher = /^(ftp|https?):\/\/([^\s\.]+\.[^\s]{2,}|localhost)$/;


/**
 * Loosely validate a URL.
 *
 * @param {String} string
 * @return {Boolean}
 */

function isUrl (string) {
  return matcher.test(string);
}