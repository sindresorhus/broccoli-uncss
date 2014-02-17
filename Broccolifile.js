'use strict';
module.exports = function (broccoli) {
	return require('./index')(broccoli.makeTree('fixture'), {html: ['./fixture/fixture.html']});
};
