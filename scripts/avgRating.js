"use restrict"

class product {
    constructor(title) {
        this._title = title;
        this._anySold = false;
        this._ratings = [];
    }
    get title() {
        return this._title;
    }
    get anySold() {
        return this._anySold;
    }
    get ratings() {
        return this._ratings;
    }
    set anySold(bol) {
        if (bol === true || bol === false) {
            this._anySold = bol;
        } else {
            console.log('Accepted value is only true or false.');
        }
    }
    toggleAnySoldStatus() {
        if (this._anySold === false) {
            this._anySold = true;
        } else {
            this._anySold = false;
        }
    }
    getAverageRating() {
        const reducer = (accum, curV) => accum + curV;
        return Math.round((this._ratings.reduce(reducer) / this._ratings.length) * 2) / 2 //using Math.round(number*2)/2 rounds the number to the nearest 0.5
    }
    addRating(R) {
        this._ratings.push(R);
    }
}

class book extends product {
    constructor(title, author, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }
    get author() {
        return this._author;
    }
    get pages() {
        return this._pages;
    }
}