
'use strict'
const URL = {};
//const http = require('http');
// const readline = require("readline");
const fs = require('fs');

/*
* let urls = readline.createInterface({
*  input: fs.createReadStream('markdown.md', 'utf8')
*  crlfDelay: Infinity
* });
*/


/*fs.readFile('markdown.md', 'utf8', (err, text) => {
  const regularExpression = /(\[(.*?)\]\([^"'\s]+)/g;
  let read = text.match(regularExpression)
  return read;
});*/

URL.searchLink = (link) => {
  const regularExpression = /([^"'\s]+)/g;
  let links = link.match(regularExpression);
  return links;
}

URL.searchText = (txt) => {
  const regularExpression = /(\[(.*?)\])/g;
  let text = txt.match(regularExpression);
  if (text !== '') {
    return text;
  }
}

URL.results = (text) => {
  let links = fs.readFile(err, text);
  let total = links.filter((e) => {
    let url = URL.url(e);
    let text = URL.text(e);
    let object = {href: url, text: text}
    return object;
  })
  return total;
}

console.log(URL);

module.exports = URL;