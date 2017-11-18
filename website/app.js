document.addEventListener("DOMContentLoaded", (event) => { 

  // DOM Elements

  let pizzaDetails = document.querySelector("#current-pizza-details");
  let orderDetails = document.querySelector("#current-order-details");
  let totalPrice = document.querySelector('#total-price-details');
  let toppingButtons = document.querySelectorAll('.pizza-topping');
  let sizeButtons = document.querySelectorAll('.pizza-size');
  let addToOrderButton = document.querySelector("#add-to-order");

    
  // Click Events

  for (let button of toppingButtons) {
    button.addEventListener('click', toppingButtonClicked);
  }

  for (let button of sizeButtons) {
    button.addEventListener('click', sizeButtonClicked);
  }

  addToOrderButton.addEventListener('click', (event) => {
    addPizzaToOrder();
  });

  // Logics
  
  let pizzaPage = {
    updatePizzaUI: (pizza) => {
      pizzaDetails.innerText = pizza.description();
    }, 
    updateOrderUI: (order) => {
      orderDetails.innerHTML = "";
      for (let pizza of order._pizzas) {
        let listItem = document.createElement("li");
        listItem.innerText = pizza.description();
        orderDetails.appendChild(listItem);
      }

      totalPrice.innerText = "$"+order.price();
    }
  };

  function addPizzaToOrder() {
    addCurrentPizzaToOrder(pizzaPage);
  }

  function toppingButtonClicked(event) {
    const topping = event.target.innerText;
    addTopping(pizzaPage, topping);
  }

  function sizeButtonClicked(event) {
    const size = event.target.innerText;
    changeSize(pizzaPage, size);
  }

  newOrderCreated(pizzaPage, newPizzaOrder());
});