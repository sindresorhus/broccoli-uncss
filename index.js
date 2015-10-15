'use strict';
var Filter = require('broccoli-filter');
var RSVP = require('rsvp');
var assign = require('object-assign');
var uncss = require('uncss');

function UncssFilter(inputTree, options) {
	if (!(this instanceof UncssFilter)) {
		return new UncssFilter(inputTree, options);
	}

	Filter.call(this, inputTree);

	this.inputTree = inputTree;
	this.options = assign({}, options);

	if (!Array.isArray(this.options.html)) {
		throw new Error('`html` option required');
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

	return new RSVP.Promise(function(resolve, reject) {
		uncss(this.html, this.options, function (err, data) {
			if (err) {
				return reject(err);
			}

			resolve(data);
		});
	}.bind(this));
};

module.exports = UncssFilter;
