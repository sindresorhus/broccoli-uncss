'use strict';
module.exports = function (broccoli) {
	return require('./index')('fixture', {html: ['./fixture/fixture.html']});
};
