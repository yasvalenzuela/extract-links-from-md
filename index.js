const URL = require("./src/extract-links-from-md.js");
let texto = fs.readFileSync('../markdown.md').toString();

module.exports = URL;
