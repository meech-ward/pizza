// Create a new pizza when this page loads. This will be the current pizza.
let currentPizza = newPizza();
let currentOrder;

/**
 * This will get called when the page first loads.
 */
function newOrderCreated(pizzaPage, order) {
  currentOrder = order;

  pizzaPage.updateOrderUI(currentOrder);
  pizzaPage.updatePizzaUI(currentPizza);
}

/**
 * This will get called when the user clicks on the add pizza to order button.
 * 1. Add the current pizza to the order.
 * 2. Create a new pizza to start customizing.
 * 3. Update the UI to reflect the order updates.
 */
function addCurrentPizzaToOrder(pizzaPage) {
  currentOrder.addPizza(currentPizza);
  pizzaPage.updateOrderUI(currentOrder);

  currentPizza = newPizza();
  pizzaPage.updatePizzaUI(currentPizza);
}

/**
 * This will get called when the user clicks on a topping button.
 * 1. Add this new topping to the current pizza.
 * 2. Update the UI with the pizza
 */
function addTopping(pizzaPage, topping) {
  currentPizza.addTopping(topping);
  pizzaPage.updatePizzaUI(currentPizza);
}

/**
 * This will get called when the user clicks on a size button.
 * 1. Change the current pizza's size.
 * 2. Update the ui with the pizza
 */
function changeSize(pizzaPage, size) {
  currentPizza.setSize(size);
  pizzaPage.updatePizzaUI(currentPizza);
}