class Shapes {
    constructor(color) {
        this.color = color;
    }
    render() {
        throw new Error('render() method needed in child class')
    }
}

class Circle extends Shapes {
    constructor(color) {
        super(color);
    }
    render() {
        '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="red" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text></svg>';
    }
}

class Polygon extends Shapes {
    constructor(color) {
        super(color);
    }
    render() {
        '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,50 160,180 40,180" fill="yellow" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text></svg>';
    }
}

class Rect extends Shapes {
    constructor(color) {
        super(color);
    }
    return() {
        '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" x="10" y="10" rx="20" ry="20" fill="green" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text></svg>';
    }
}

module.exports = { Shapes, Circle, Polygon, Rect};