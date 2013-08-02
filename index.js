
/**
 * Expose `isUrl`.
 */

module.exports = isUrl;


/**
 * Matcher.
 */

var loose = /^((ht|f)tps?\:\/\/|~\/|\/)?(\w+:\w+@)?((([-\w\d{1-3}]+\.)+(com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|edu|co\.uk|ac\.uk|it|fr|tv|museum|asia|local|travel|[a-z]{2}))|((\b25[0-5]\b|\b[2][0-4][0-9]\b|\b[0-1]?[0-9]?[0-9]\b)(\.(\b25[0-5]\b|\b[2][0-4][0-9]\b|\b[0-1]?[0-9]?[0-9]\b)){3}))(:[\d]{1,5})?(((\/([-\w~!$+|.,=]|%[a-f\d]{2})+)+|\/)+|\?|#)?((\?([-\w~!$+|.,*:]|%[a-f\d{2}])+=?([-\w~!$+|.,*:=]|%[a-f\d]{2})*)(&([-\w~!$+|.,*:]|%[a-f\d{2}])+=?([-\w~!$+|.,*:=]|%[a-f\d]{2})*)*)*(#([-\w~!$ |\/.,*:;=]|%[a-f\d]{2})*)?$/i;


/**
 * Stricter matcher.
 */

var strict = /^(ht|f)tps?\:\/\/|~\/|\//i;


/**
 * Loosely validate a URL.
 *
 * @param {String} string
 * @param {Boolean} stricter
 * @return {Boolean}
 */

function isUrl (string, stricter) {
  return stricter
    ? loose.test(string) && strict.test(string)
    : loose.test(string);
}