'use strict';
const URL = {};
// const http = require('http');
// const readline = require("readline");
const fs = require('fs');
let texto = fs.readFileSync('./markdown.md').toString(); // leo el archivo markdown y lo paso a string
// console.log(texto);

// función que extrae solo los links
URL.extractLinks = (texto) => {
  const regularExpression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  let links = texto.match(regularExpression);
  // console.log(links);
  return links;
};
// URL.extractLinks(texto);

// funcion que extrae solo el texto en []
URL.extractTexts = (texto) => {
  const regularExpression = /\[(.*?)\]/g;
  let txt = texto.match(regularExpression);
  // console.log(txt);
  return txt;
};
// URL.extractTexts(texto);

//funcion que extra texto en [] y link en ()


let linksTotal = URL.extractLinks(texto);
let txtTotal = URL.extractTexts(texto);
URL.extractLinksAndTexts = (texto) => {
  const regularExpression = /\[(.*?)\]|[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  let totalLinks = texto.match(regularExpression);
  // console.log(totalLinks);
  return totalLinks;
};

// funcion que devuelve el objecto con href y text
URL.total = (texto) => {
  const regularExpression = /\[(.*?)\]|[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  let totalLinks = texto.match(regularExpression); 
  let result = [];
  for (let i = 0; i < totalLinks.length; i++) { // itero sobre la variable que contiene links y texto.
    result.push(
      {href: totalLinks[i + 1], // i+1 porque link esta en esa pocisión
        text: totalLinks[i] }
    );
    i++;
  }
  console.log(result);
  return JSON.stringify(result); // convierte un valor dado en javascript a una cadena JSON si no esta no funciona
};


URL.total(texto);


module.exports = URL;

