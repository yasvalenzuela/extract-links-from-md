let URL =  new url();
const http = require('http');
// const readline = require("readline");
const fs = require('fs');

/*
* let urls = readline.createInterface({
*  input: fs.createReadStream('markdown.md', 'utf8')
*  crlfDelay: Infinity
* });
*/

fs.readFile('markdown.md', 'utf8', (err, text) => {
  const links = /(\[(.*?)\]\([^"'\s]+)/g;
  let read = text.match(links);
  console.log(read);
});

class url {
  constructor(link, text) {
    this.href = link;
    this.text = text;
  }
}
console.log(URL);
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


// module.exports = URL;

// text = (markdown.md),
// encontrados = text.match(links);

// console.log(encontrados)
