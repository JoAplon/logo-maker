const { describe } = require('yargs');
const Shapes = require('./shapes');
const fs = require('fs');

// create tests describing the expected results and see if they match the generated results

describe ('Shapes', () => {
    describe('circle', () => {
        it('generates a circle', () => {
          const shapes = new Circle;
          shapes.setColor('red');
          expect(shapes.remder()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
        });
      });
});

describe ('Shapes', () => {
    describe('polygon', () => {
        it('generates a triangle', () => {
          const shapes = new Polygon;
          shapes.setColor('yellow');
          expect(shapes.remder()).toEqual('<polygon points="100,50 160,180 40,180" fill="yellow" />');
        });
      });
});

describe ('Shapes', () => {
    describe('rect', () => {
        it('generates a square', () => {
          const shapes = new Rect;
          shapes.setColor('green');
          expect(shapes.remder()).toEqual('<rect width="100" height="100" x="10" y="10" rx="20" ry="20" fill="green" />');
        });
      });
});

