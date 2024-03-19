const { Circle, Polygon, Rect, Shapes } = require('./classes')

// create tests describing the expected results and see if they match the generated results

describe('Shapes', () => {
    it('render() child classes', () => {
        const shapes = new Shapes();
        expect(() => shapes.render()).toThrowError('render() method needed in child classes')
    })
});

describe('Circle', () => {
    it('generates a circle', () => {
        const circle = new Circle('red');
        expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
    });
});

describe('Polygon', () => {
    it('generates a triangle', () => {
        const polygon = new Polygon('yellow');
        expect(polygon.render()).toEqual('<polygon points="100,50 160,180 40,180" fill="yellow" />');
    });
});

describe('Rect', () => {
    it('generates a square', () => {
        const rect = new Rect('green');
        expect(rect.render()).toEqual('<rect width="100" height="100" x="10" y="10" rx="20" ry="20" fill="green" />');
    });
});

