const point = {
    x: 1.5,
    y: 2.123,
    toString: function() {
        return `${this.x}, ${this.y}`
    },

    toLocaleString() {
        return `${this.x.toLocaleString('en-us')},${this.y.toLocaleString('en-us')}`
    },
    valueof() {
        return Math.hypot(this.x, this.y).toFixed(2)
    }
}

const pointVal = Number(point)