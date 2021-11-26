const { convert } = require('html-to-text');
// There is also an alias to `convert` called `htmlToText`.

const html = '<h1>Hello World</h1>';
const text1 = convert(html, {
  wordwrap: 130
});
console.log(text1); // Hello World