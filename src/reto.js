const readline = require("readline");
const fs = require('fs');

const url = readline.createInterface({
  input: fs.createReadStream('markdown.md')
});


// /(\[(.*?)\])/g = esta expresion regular reconoce texto entre [];
// /([^"'\s]+)/g = esta expresion regular reconoce los url que estan dentro del texto markdown
const links = /(\[(.*?)\]\([^"'\s]+)/g;

const newVar = url.match(links => links);
 //url.match(links); // funciona por mientras solo con un texto


/*
* const names = ['PAULA', 'MARCIA', 'CAMILA', 'SABRINA'];
* const namesLower = names.map(element => element.toLowerCase());
*/




    //text = (markdown.md),
    //encontrados = text.match(links);

    //console.log(encontrados)
