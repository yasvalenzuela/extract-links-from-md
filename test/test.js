const assert = require('assert');
const chai = require('chai');
const expect = chai.expect;
const URL = require('../src/reto.js');
const fs = require('fs');
let texto = fs.readFileSync('./markdown.md').toString();


describe('Comprobar que extrae links', () => {
  it('Debe retornar links de un texto', () => {
    chai.assert.equal(URL.extractLinks(texto), ('https://es.wikipedia.org/wiki/Idioma_ingl%C3%A9s,https://es.wikipedia.org/wiki/Drama,https://es.wikipedia.org/wiki/Verso,https://es.wikipedia.org/wiki/Romanticismo'
    ), true);
    // chai.assert.equal(URL.extractLinks, ('[http://www.google.cl]'), undefined);
    // expect(URL.extractLinks.to.be.equal('http://www.google.cl'));
  });
});

describe('Comprobar que extrae texto', () => {
  it('Debe retornar texto que se encuentra en []', () => {
    chai.assert.equal(URL.extractTexts(texto), ('[ingles],[drama],[verso],[románticos]'), true);
    // chai.assert.equal(URL.extractTexts, ('(palabra)'), false);
    // expect(URL.extractText(text)).to.be.equal('[palabra]');
  });
});




describe('Comprobar que devuelve un arreglo de objetos', () => {
  it('Debe retornar un arreglo de objetos', () => {
    chai.assert.equal(URL.total(texto), (
      '[{"href":"https://es.wikipedia.org/wiki/Idioma_ingl%C3%A9s","text":"[ingles]"},{"href":"https://es.wikipedia.org/wiki/Drama","text":"[drama]"},{"href":"https://es.wikipedia.org/wiki/Verso","text":"[verso]"},{"href":"https://es.wikipedia.org/wiki/Romanticismo","text":"[románticos]"}]'
    ), true);
    // expect(URL.extractLinksAndText(texto)).to.be.equal('[{href: "https://es.wikipedia.org/wiki/Drama", text: "[ingles]"},{href: "https://es.wikipedia.org/wiki/Drama", text: "[drama]"},{href: "https://es.wikipedia.org/wiki/Verso", text: "[verso]"},{href: "https://es.wikipedia.org/wiki/Romanticismo", text: "[románticos]"}]');
  });
});