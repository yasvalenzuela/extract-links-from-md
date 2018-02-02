'use strict';
const URL = {};
// const http = require('http');
// const readline = require("readline");
const fs = require('fs');
let texto = fs.readFileSync('./markdown.md').toString();
// console.log(texto);


URL.extractLinks = (texto) => {
  const regularExpression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  let links = texto.match(regularExpression);
  return links;
  // console.log(links);
};

// URL.extractLinks(texto);

URL.extractTexts = (texto) => {
  const regularExpression = /\[(.*?)\]/g;
  let txt = texto.match(regularExpression);
  return txt;
  console.log(txt);
};

// URL.extractTexts(texto);


let linksTotal = URL.extractLinks(texto);
let txtTotal = URL.extractTexts(texto);
URL.extractLinksAndTexts = (texto) => {
  let url = [];
  for (let i = 0; i < linksTotal.length; i++) {
    for(let j = 0; j < txtTotal.length; j++) {
      url.push(
      {href: linksTotal[i],
      text: txtTotal[j] }
      );
    i++;
    j++;
    }
    
  }
  return url;
  // console.log(url);
};

URL.extractLinksAndTexts(texto);


module.exports = URL;

