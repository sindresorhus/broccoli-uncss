# [broccoli](https://github.com/joliss/broccoli)-uncss [![Build Status](https://travis-ci.org/sindresorhus/broccoli-uncss.svg?branch=master)](https://travis-ci.org/sindresorhus/broccoli-uncss)

> Remove unused CSS with [UnCSS](https://github.com/giakki/uncss)

*Issues with the output should be reported on the UnCSS [issue tracker](https://github.com/giakki/uncss/issues).*


## Install

```
$ npm install --save-dev broccoli-uncss
```


## Usage

```js
var uncss = require('broccoli-uncss');
tree = uncss(tree, {html: ['index.html']});
```

## HTML option

The html option is mandatory, it is a list of the html files used to filter the CSS properties.

Example:
```
tree = uncss(tree, {html: ['./index.html']});
```

## API

### uncss(tree, [options])

#### options

See the UnCSS [options](https://github.com/giakki/uncss#within-nodejs), except for `raw`.

##### html

*Required*  
Type: `array`

HTML files to use when matching what CSS selectors to filter out.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
