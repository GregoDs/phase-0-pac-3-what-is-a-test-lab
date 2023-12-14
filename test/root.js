const jsdomGlobal = require('jsdom-global');
const path = require('path');
const fs = require('fs');

// Set up JSDOM environment
const dom = jsdomGlobal();

// Load your source file
const sourceCode = fs.readFileSync(path.resolve(__dirname, '..', 'index.js'), 'utf-8');
eval(sourceCode);  // Evaluate the source code in the JSDOM environment

// Expose 'expect' globally
global.expect = require('expect');

// Clean up after tests
after(() => {
  dom();  // Tear down the JSDOM environment
});