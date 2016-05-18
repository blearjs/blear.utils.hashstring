/**
 * 测试 文件
 * @author ydr.me
 * @create 2016-05-17 12:13
 */


'use strict';

var hashstring = require('../src/index.js');

describe('index.js', function () {
    it('.parse', function (done) {
        var ret = hashstring.parse('/a/b/c?x=1&y=2&z=3');

        expect(ret.path).toEqual('/a/b/c?x=1&y=2&z=3');
        expect(ret.pathname).toEqual('/a/b/c');
        expect(ret.query).toEqual({
            x: '1',
            y: '2',
            z: '3'
        });
        done();
    });

    it('.stringify', function (done) {
        var ret = hashstring.stringify({
            path: '/a/b/c',
            query: {
                x: 1,
                y: 2,
                z: 3
            },
            querystring: 'p=1&k=2&g=3'
        });

        expect(ret).toMatch(/^\/a\/b\/c/);
        expect(ret).toMatch(/\?/);
        expect(ret).not.toMatch(/x=1/);
        expect(ret).not.toMatch(/y=2/);
        expect(ret).not.toMatch(/z=3/);
        expect(ret).toMatch(/\?p=1&k=2&g=3/);
        done();
    });
});
