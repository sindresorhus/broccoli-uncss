'use strict';
const Filter = require('broccoli-filter');
const uncss = require('uncss');
const pify = require('pify');

module.exports = class extends Filter {
	constructor(inputTree, options) {
		super(inputTree);

		this.inputTree = inputTree;
		this.options = Object.assign({}, options);

		if (!Array.isArray(this.options.html)) {
			throw new TypeError('`html` option required');
		}

		this.html = this.options.html;
		delete this.options.html;
	}

	get extensions() {
		return ['css'];
	}

	get targetExtension() {
		return 'css';
	}

	processString(text) {
		this.options.raw = text;
		return pify(uncss)(this.html, this.options);
	}
};
