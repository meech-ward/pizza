const chai = require('chai');
const expect = chai.expect;

const Pizza = require('../pizza-no-oo');

describe("Pizza", function() {

  let pizza;
  beforeEach(function() {
    pizza = Pizza.newPizza();
  });

  describe("#newPizza", function() {
    it("should have empty toppings", function() {
      expect(pizza.toppings).to.be.an('array').that.is.empty;
    });
    it("should have medium size", function() {
      expect(pizza.size).to.equal('m');
    });
  });

  describe("#addTopping", function() {
    it("should have that topping", function() {
      Pizza.addTopping("something", pizza);
      expect(pizza.toppings).to.include("something");
    });
  });

  describe("#removeTopping", function() {
    it("should not have that topping", function() {
      Pizza.addTopping("something", pizza);
      Pizza.removeTopping("something", pizza);
      expect(pizza.toppings).to.not.include("something");
    });
  });

  describe("#pizzaPrice", function() {
    context("when pizza is small", function () {
      it("should be 10 dollars", function() {
        pizza.size = 's';
        const price = Pizza.pizzaPrice(pizza);
        expect(price).to.equal(10);
      });
    });
    context("when pizza is medium", function () {
      it("should be 15 dollars", function() {
        pizza.size = 'm';
        const price = Pizza.pizzaPrice(pizza);
        expect(price).to.equal(15);
      });
    });
    context("when pizza is large", function () {
      it("should be 20 dollars", function() {
        pizza.size = 'l';
        const price = Pizza.pizzaPrice(pizza);
        expect(price).to.equal(20);
      });
    });
    context("when toppings are added", function () {
      it("each topping should be 1 dollar", function() {
        pizza.size = '_';
        Pizza.addTopping("a", pizza);
        expect(Pizza.pizzaPrice(pizza)).to.equal(1);
        Pizza.addTopping("b", pizza);
        expect(Pizza.pizzaPrice(pizza)).to.equal(2);
        Pizza.addTopping("c", pizza);
        Pizza.addTopping("d", pizza);
        Pizza.addTopping("e", pizza);
        expect(Pizza.pizzaPrice(pizza)).to.equal(5);
      });
    });
  });
});