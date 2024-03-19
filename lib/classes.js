class Shapes {
    constructor(color) {
        this.color = color;
    }
    render() {
        throw new Error('render() method needed in child classes')
    }
}

class Circle extends Shapes {
    constructor(color) {
        super(color);
    }
    render() {
        return '<circle cx="150" cy="100" r="80" fill="red" />';
    }
}

class Polygon extends Shapes {
    constructor(color) {
        super(color);
    }
    render() {
       return '<polygon points="100,50 160,180 40,180" fill="yellow" />';
    }
}

class Rect extends Shapes {
    constructor(color) {
        super(color);
    }
    render() {
       return '<rect width="100" height="100" x="10" y="10" rx="20" ry="20" fill="green" />';
    }
}

module.exports = { Shapes, Circle, Polygon, Rect};