/**
 * Expose `isUrl`.
 */

module.exports = isUrl;


/**
 * Matcher.
 */

var matcher = /^(https?|wss?|ftp|mongodb|postgres|redis):\/\/([^\s\.]+\.[^\s]{2,}|localhost[\:?\d]*)$/;


/**
 * Loosely validate a URL.
 *
 * @param {String} string
 * @return {Boolean}
 */

function isUrl (string) {
  return matcher.test(string);
}
