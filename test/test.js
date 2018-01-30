
const assert = require('assert');
const chai = require('chai');
const URL = require('../src/reto.js');
let text = `# Lorem ipsum
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut [labore](https://en.wiktionary.org/wiki/labore) et
[dolore](https://en.wiktionary.org/wiki/dolore) magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat.
[foo](http://foo.com)`;

describe('comprobar que detecta URL', () => {
  it('Debe comprobar que devuelva las URL en ()', () => {
    chai.assert.equal(URL.searchLink(text), ('(https://en.wiktionary.org/wiki/labore),(http://en.wiktionary.org/wiki/labore),(http://foo.com)'), true);
    // chai.assert.equal(URL.searchLink(text), 'google', false);
  });
});

describe('comprobar que detecta texto en []', () => {
  it('Debe comprobar que devuelva el texto en []', () => {
    chai.assert.equal(URL.searchText(text), ('[labore],[dolore],[foo]'), true);
    // chai.assert.equal(URL.searchText(text), ('['']'), false);
  });
});

describe('comprobar que devuelva un objeto de arreglos', () => {
  it('Debe comprobar que devuelva {href: http://foo.com, text: text}', () => {
    chai.assert.equal(URL.searchLinkTotal(text), '', true);
    // chai.assert.equal(URL.searchText(text), 'google', false);
  });
});
