# [broccoli](https://github.com/joliss/broccoli)-uncss [![Build Status](https://travis-ci.org/sindresorhus/broccoli-uncss.png?branch=master)](https://travis-ci.org/sindresorhus/broccoli-uncss)

> Remove unused CSS with [UnCSS](https://github.com/giakki/uncss)

*Issues with the output should be reported on the UnCSS [issue tracker](https://github.com/giakki/uncss/issues).*


## Install

```
npm install --save broccoli-uncss
```


## Example

```js
var uncss = require('broccoli-uncss');
tree = uncss(tree, options);
```


## API

### uncss(tree, options)

#### options

See the UnCSS [options](https://github.com/giakki/uncss#within-nodejs), except for `raw`.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
