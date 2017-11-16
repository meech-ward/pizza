var pizzaOrder = {
  init: function() {
    this._pizzas = [];
    return this;
  },
  addPizza: function(pizza) {
    this._pizzas.push(pizza);
  },
  removePizza: function(pizza) {
    var index = this._pizzas.indexOf(topping);
    if (index > -1) {
      this._pizza.splice(index, 1);
    }
  },
  description: function() {
    let description = "";
    for (let pizza of this._pizzas) {
      description += pizza.description() +"\n";
    }
    return description;
  },
  price: function() {
    let cost = 0;
    for (let pizza of this._pizzas) {
      cost += pizza.price();
    }
    return cost;
  }
};
var pizza = {
  init: function() {
    this._toppings = [];
    this._size = "m";
    return this;
  },
  addTopping: function(topping) {
    var index = this._toppings.indexOf(topping);
    if (index === -1) {
      this._toppings.push(topping);
    }
  },
  removeTopping: function(topping) {
    var index = this._toppings.indexOf(topping);
    if (index > -1) {
      this._toppings.splice(index, 1);
    }
  },
  // s, m, l
  setSize: function(size) {
    size = size.toLowerCase().trim();
    if (size === 's' || size === 'm' || size === 'l') {
      this._size = size
    } else if (size === 'small') {
      this._size = 's';
    } else if (size === 'medium') {
      this._size = 'm';
    } else if (size === 'large') {
      this._size = 'l';
    }
  },
  price: function() {
    var cost = 0;

    if (this._size === 's') {
      cost += 10;
    } else if (this._size === 'm') {
      cost += 15;
    } else if (this._size === 'l') {
      cost += 20;
    }

    for (let i = 0; i < this._toppings.length; i++) {
      cost += 1;
    }

    return cost;
  },
  description: function() {
    let description = "A ";
    if (this._size === 's') {
      description += "Small";
    } else if (this._size === 'm') {
      description += "Medium";
    } else if (this._size === 'l') {
      description += "Large";
    }

    description += " pizza with";

    if (this._toppings.length === 0) {
      description += " no toppings";
    } else {
      let i = 0;
      for (let topping of this._toppings) {
        description += (i++ > 0 ? ", " : " ") + topping;
      }
    }

    description += ": $" + this.price();

    return description;
  }
};

function newPizza() {
  return Object.create(pizza).init();
}

function newPizzaOrder() {
  return Object.create(pizzaOrder).init();
}