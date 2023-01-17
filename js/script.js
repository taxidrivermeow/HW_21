class Product {
    #id;
    #title;
    #manufacture;
    #price;
    static #idCounter = 0;
    constructor(title, manufacture, price) {
        this.#id = ++Product.#idCounter;
        this.#title = title;
        this.#manufacture = manufacture;
        this.#price = price;
    }
}

class Milk extends Product {
    #fat;
    constructor(title, manufacture, price, fat) {
        super(title, manufacture, price);
        this.#fat = fat;
    }
}

class Chocolate extends Product {
    #kind;
    constructor(title, manufacture, price, kind) {
        super(title, manufacture, price);
        this.#kind = kind;
    }
}

class Wine extends Product {
    #alcohol;
    constructor(title, manufacture, price, alcohol) {
        super(title, manufacture, price);
        this.#alcohol = alcohol;
    }
}


class Store {
    #products = [];
    add(product) {
        this.#products.push(product);
    }

    getAll() {
        return this.#products;
    }

    getByType(type) {
        return this.#products.filter(product => {
            if (product.constructor.name.toLowerCase() === type.toLowerCase()) {
                return product;
            }
        });
    }
}

const milk1 = new Milk('Milk1', 'Comp1', 10, 3.5);
const milk2 = new Milk('Milk2', 'Comp2', 11, 4.5);
const milk3 = new Milk('Milk3', 'Comp3', 12, 5.5);
const chocolate1 = new Chocolate('Chocolate1', 'Comp1', 5.5, 'black');
const chocolate2 = new Chocolate('Chocolate2', 'Comp2', 6.5, 'white');
const chocolate3 = new Chocolate('Chocolate3', 'Comp3', 7.5, 'milk');
const wine1 = new Wine('Wine1', 'Comp1', 65, 12);
const wine2 = new Wine('Wine2', 'Comp2', 75, 14);
const wine3 = new Wine('Wine3', 'Comp3', 85, 15);
const store = new Store();

store.add(milk1);
store.add(milk2);
store.add(milk3);
store.add(chocolate1);
store.add(chocolate2);
store.add(chocolate3);
store.add(wine1);
store.add(wine2);
store.add(wine3);

console.log(store.getAll());
console.log(store.getByType('Milk'));
console.log(store.getByType('Chocolate'));
console.log(store.getByType('Wine'));
console.log(store.getByType('Bread'));