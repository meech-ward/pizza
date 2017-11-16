function newPizza() {
  return {
    toppings: [],
    size: "m"
  };
}
exports.newPizza = newPizza;

function addTopping(topping, pizza) {
  pizza.toppings.push(topping);
}
exports.addTopping = addTopping;

function removeTopping(topping, pizza) {
  const index = pizza.toppings.indexOf(topping);
  if (index > -1) {
    pizza.toppings.splice(index, 1);
  }
}
exports.removeTopping = removeTopping;

// // s, m, l
// function setSize(size, pizza) {
//   if (size === 's' || size === 'm' || size === 'l') {
//     pizza.size = size
//   }
// }

function pizzaPrice(pizza) {
  var cost = 0;

  if (pizza.size === 's') {
    cost += 10;
  } else if (pizza.size === 'm') {
    cost += 15;
  } else if (pizza.size === 'l') {
    cost += 20;
  }

  for (let i = 0; i < pizza.toppings.length; i++) {
    cost += 1;
  }

  return cost;
}
exports.pizzaPrice = pizzaPrice;

function pizzaDescription(pizza) {
  let description = "A ";
  if (pizza.size === 's') {
    description += "Small";
  } else if (pizza.size === 'm') {
    description += "Medium";
  } else if (pizza.size === 'l') {
    description += "Large";
  }

  description += " pizza with";

  for (let topping of pizza.toppings) {
    description += " " + topping;
  }

  description += ": " + this.price();

  return description;
}
exports.pizzaDescription = pizzaDescription;


var pizzaOrder = {
  pizzas: [],
  addPizza: function(pizza) {
    this._pizzas.append
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