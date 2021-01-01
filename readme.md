# [broccoli](https://github.com/joliss/broccoli)-uncss

> Remove unused CSS with [UnCSS](https://github.com/giakki/uncss)

*Issues with the output should be reported on the UnCSS [issue tracker](https://github.com/giakki/uncss/issues).*


## Install

```
$ npm install --save-dev broccoli-uncss
```


## Usage

```js
const UnCSS = require('broccoli-uncss');
tree = new UnCSS(tree, {html: ['index.html']});
```


## API

### UnCSS(tree, [options])

#### options

See the UnCSS [options](https://github.com/giakki/uncss#within-nodejs), except for `raw`.

##### html

*Required*<br>
Type: `Array`

HTML files to use when matching what CSS selectors to filter out.


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
