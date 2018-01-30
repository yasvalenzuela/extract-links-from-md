

'use strict';
const URL = {};
const http = require('http');
// const readline = require("readline");
const fs = require('fs');


URL.textAndLink = () => {
  fs.readFile('markdown.md', 'utf8', (err, text) => {
    const regularExpression = /(\[(.*?)\]\([^"'\s]+)/g;
    let read = text.match(regularExpression).toString();
    return read;
  // console.log(read);
  });
};


URL.searchLink = (text) => {
  fs.readFile('markdown.md', 'utf8', (err, text) => {
    const regularExpression = /([^"'\s]+)/g;
    let links = text.match(regularExpression).toString();
    return links;
  });
};

/*
URL.searchLink = (text) => {
  const regularExpression = /([^"'\s]+)/g;
  let links = text.match(regularExpression).toString();
  return links;
  // console.log(URL.searchLink);
};
*/

/*
let searchText = fs.readFile('markdown.md', 'utf8', (err, text) => {
  const regularExpression = /(\[(.*?)\]\([^"'\s]+)/g;
  let reads = text.match(regularExpression).toString();
  return reads;
  // console.log(reads);
});
*/

URL.searchText = (text) => {
  const regularExpression = /(\[(.*?)\])/g;
  let texts = text.match(regularExpression).toString();
  if (texts !== '') {
    return texts;
  }
};


URL.searchLinkTotal = (text) => {
  let urlTotal = text.map((element) => {
    let searchLink = URL.searchLink(element);
    let searchText = URL.searchText(element);
    let object = {
      href: url,
      text: text};
    return object;
    // console.log(object);
  });
  return urlTotal;
  // console.log(total);
};

module.exports = URL;



/*
* let urls = readline.createInterface({
*  input: fs.createReadStream('markdown.md', 'utf8')
*  crlfDelay: Infinity
* });
*/

/*
URL.searchLink = (txt) => {
  const regularExpression = /([^"'\s]+)/g;
  let links = link.match(regularExpression);
  return links;
};


URL.searchText = (txt) => {
  const regularExpression = /(\[(.*?)\])/g;
  let text = txt.match(regularExpression);
  if (text !== '') {
    return text;
  }
};


URL.results = (txt) => {
  let content = fs.readFile('markdown.md', 'utf8', (err, text) => {
    const regularExpression = /(\[(.*?)\]\([^"'\s]+)/g;
    let read = text.match(regularExpression).toString();
  console.log(read);
  });;
  let total = links.map(() => {
    let url = URL.url();
    let text = URL.text();
    let object = {
      href: url,
      text: text};
    return object;
    console.log(object);
  });
  return total;
  console.log(total);
};

// /(\[(.*?)\])/g = esta expresion regular reconoce texto entre [];
// /([^"'\s]+)/g = esta expresion regular reconoce los url que estan dentro del texto markdown

/*
* let newVar = urls.on('line', (text) => {
*    const links = /(\[(.*?)\]\([^"'\s]+)/g;
*    let read = text.match(links);
*  }),
*});
*/
// url.match(links); // funciona por mientras solo con un texto

/*
* const names = ['PAULA', 'MARCIA', 'CAMILA', 'SABRINA'];
* const namesLower = names.map(element => element.toLowerCase());
*/


/*

// text = (markdown.md),
// encontrados = text.match(links);

// console.log(encontrados)
*/