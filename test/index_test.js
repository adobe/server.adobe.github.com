/*
 * Copyright (c) 2013 Timo Behrmann. All rights reserved.
 */

var server = require('../server');
var should = require('should');

describe('test', function () {
    it('test', function (done) {
        server.should.not.be.null;

        done();
    });
});