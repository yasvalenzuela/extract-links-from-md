
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
  return txt;
  console.log(txt);
};





module.exports = URL;


