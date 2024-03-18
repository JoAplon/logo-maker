const { describe } = require('yargs');
const Shapes = require('./shapes');
const fs = require('fs');

// create tests describing the expected results and see if they match the generated results

describe ('Shapes', () => {
    describe('circle', () => {
        it('generates a circle', () => {
          const shapes = new Shapes;
          const result = shapes.isCircle("circle");
          expect(result).toEqual();
        });
      });
})