'use strict';

var url =         require('blear.utils.url');
var querystring = require('blear.utils.querystring');


/**
 * 解析 hashstring
 * @param hashstring {string}
 * @returns {{path: (string), query: *}}
 *
 * @example
 * hashstring.parse('/a/b/?x=1&y=2');
 * =>
 * {
     *   path: '/a/b/',
     *   query: {
     *     x: '1',
     *     y: '2'
     *   }
     * }
 */
exports.parse = function (hashstring) {
    var ret = url.parse(hashstring);

    return {
        path: ret.href,
        pathname: ret.pathname,
        query: ret.query
    };
};


/**
 * 字符串化
 * @param obj {object}
 * @returns {string}
 */
exports.stringify = function (obj) {
    obj.querystring = obj.querystring || querystring.stringify(obj.query);
    obj.path = obj.path || '/';
    return obj.path + (obj.querystring ? '?' : '') + obj.querystring
};