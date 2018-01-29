const chai = require('chai');
const URL = require('../src/reto.js');
const string = 'Proserpina, un drama mitológico en dos actos, cuyo título original en [ingles](https://es.wikipedia.org/wiki/Idioma_ingl%C3%A9s) es Proserpine, a mythological [drama](https://es.wikipedia.org/wiki/Drama) in two acts, es un drama en [verso](https://es.wikipedia.org/wiki/Verso)'

describe ('validar URL', () => {
  it('Debe comprobar el formato', () => {
    chai.assert.equal(URL.searchLink('https://google.com'), true);
    chai.assert.equal(URL.searchLink('google'), false);
  })

  it('Verifica el formato del texto', () => {
    chai.assert.equal(URL.searchText('[texto]'), 'true');
    chai.assert.equal(URL.searchText('texto'), false);
  })

  it('Devuelve si es un objeto de arreglos', () => {
    chai.assert.equal(URL.results(), '{href: www.link.com, text: text}')
  })


  

});
