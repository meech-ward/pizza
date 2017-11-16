document.addEventListener("DOMContentLoaded", (event) => { 

  let pizzaDetails = document.querySelector("#current-pizza-details");
  let orderDetails = document.querySelector("#current-order-details");
  let totalPrice = document.querySelector('#total-price-details');
  let toppingButtons = document.querySelectorAll('.pizza-topping');
  let sizeButtons = document.querySelectorAll('.pizza-size');
  let addToOrderButton = document.querySelector("#add-to-order");

    
  for (let button of toppingButtons) {
    button.addEventListener('click', toppingButtonClicked);
  }

  for (let button of sizeButtons) {
    button.addEventListener('click', sizeButtonClicked);
  }

  addToOrderButton.addEventListener('click', (event) => {
    addPizzaToOrder();
  });
  
  function pizzaUpdated() {
    // pizzaDetails.innerText = pizza.description();
  }
  function orderUpdated() {
    // totalPrice.innerText = "$"+order.price();
  }
  function addPizzaToOrder() {
    let listItem = document.createElement("li");
    // listItem.innerText = pizza.description();
    orderDetails.appendChild(listItem);

    addCurrentPizzaToOrder();

    // order.addPizza(pizza);
    pizza = newPizza();

    orderUpdated();
    pizzaUpdated();
  }

  orderUpdated();
  pizzaUpdated();

  function toppingButtonClicked(event) {
    const topping = event.target.innerText;
    addTopping(topping);
    pizzaUpdated();
  }

  function sizeButtonClicked(event) {
    const size = event.target.innerText;
    changeSize(size);
    pizzaUpdated();
  }

});