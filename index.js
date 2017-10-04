'use strict';
const Filter = require('broccoli-filter');
const uncss = require('uncss');
const pify = require('pify');

function UncssFilter(inputTree, options) {
	if (!(this instanceof UncssFilter)) {
		return new UncssFilter(inputTree, options);
	}

	Filter.call(this, inputTree);

	this.inputTree = inputTree;
	this.options = Object.assign({}, options);

	if (!Array.isArray(this.options.html)) {
		throw new TypeError('`html` option required');
	}

	this.html = this.options.html;
	delete this.options.html;
}

UncssFilter.prototype = Object.create(Filter.prototype);
UncssFilter.prototype.constructor = UncssFilter;

UncssFilter.prototype.extensions = ['css'];
UncssFilter.prototype.targetExtension = 'css';

UncssFilter.prototype.processString = function (str) {
	this.options.raw = str;
	return pify(uncss)(this.html, this.options);
};

module.exports = UncssFilter;
