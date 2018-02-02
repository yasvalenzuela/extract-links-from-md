const URL = {};
let texto = 'Proserpina, un drama mitológico en dos actos, cuyo título original en [ingles](https://es.wikipedia.org/wiki/Idioma_ingl%C3%A9s) es Proserpine, a mythological [drama](https://es.wikipedia.org/wiki/Drama) in two acts, es un drama en [verso](https://es.wikipedia.org/wiki/Verso) escrito para niños por el matrimonio de escritores [románticos](https://es.wikipedia.org/wiki/Romanticismo)'

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

