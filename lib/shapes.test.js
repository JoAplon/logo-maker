const { Circle, Polygon, Rect} = require('./shapes');
const fs = require('fs');

// create tests describing the expected results and see if they match the generated results

describe('Shapes', () => {
    describe('Circle', () => {
        it('generates a circle', () => {
            const shape = new Circle();
            shape.setColor('red');
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
        });
    });

    describe('Polygon', () => {
        it('generates a triangle', () => {
            const shape = new Polygon();
            shape.setColor('yellow');
            expect(shape.render()).toEqual('<polygon points="100,50 160,180 40,180" fill="yellow" />');
        });
    });

    describe('Rect', () => {
        it('generates a square', () => {
            const shape = new Rect();
            shape.setColor('green');
            expect(shape.render()).toEqual('<rect width="100" height="100" x="10" y="10" rx="20" ry="20" fill="green" />');
        });
    });
});

