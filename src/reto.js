'use strict';
const URL = {};
// const http = require('http');
// const readline = require("readline");
const fs = require('fs');
let texto = fs.readFileSync('./markdown.md').toString();


URL.extractLinksAndTexts = (texto) => {
  const regularExpression = /\[(.*?)\](([^\s]+))/gi;
  let linksAndTexts = texto.match(regularExpression).toString();
  return linksAndTexts;
  console.log(linksAndTexts);
};

// URL.extractLinksAndTexts(texto);

URL.extractLinks = (texto) => {
  const regularExpression = /(https?|ftp):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?/gi;
  let links = texto.match(regularExpression).toString();
  return links;
  console.log(links);
};

//URL.extractLinks(texto);

URL.extractTexts = (texto) => {
  const regularExpression = /\[(.*?)\]/g;
  let txt = texto.match(regularExpression).toString();
  if (txt !== '') {
    return txt;
  }
  console.log(txt);
};


// URL.extractTexts(texto);
/*
URL.textAndLink = (err, text) => {
  fs.readFile('markdown.md', 'utf8', (err, text) => {
    const regularExpression = /(\[(.*?)\]\([^"'\s]+)/g;
    let read = text.match(regularExpression).toString();
    return read;
  console.log(read);
  });
};*/



module.exports = URL;


