import Value from "./Models/Value.js";
import Pizza from "./Models/Pizza.js";

let _state = {
  /** @type {Pizza[]} */
  pizzas: []
};

function _loadState() {
  let data = JSON.parse(localStorage.getItem("pizzaPlanet"))
  if (data) {
    data.pizzas = data.pizzas.map(rawPizzaData => new Pizza(rawPizzaData))
    _state = data
  }
}
_loadState()


class Store {
  addTopping(foundPizzaIndex, rawToppingData) {
    _state.pizzas[foundPizzaIndex].toppings.push(rawToppingData)
  }

  addPizza(cookedPizza) {
    _state.pizzas.push(cookedPizza)
    console.log(_state);

  }
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }

  saveState() {
    localStorage.setItem("pizzaPlanet", JSON.stringify(_state))
  }

}

const STORE = new Store();
export default STORE;
