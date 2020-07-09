import _store from '../store.js'
import Pizza from '../Models/Pizza.js';


class PizzasService {
    addTopping(rawToppingData, pizzaId) {
        let foundPizzaIndex = _store.State.pizzas.findIndex(pizza => pizza.id == pizzaId)
        if (foundPizzaIndex < 0) {
            console.error("This is not the pizza you are looking for...");
            return
        }
        _store.addTopping(foundPizzaIndex, rawToppingData)
        _store.saveState()
    }

    addPizza(rawPizzaData) {
        let cookedPizza = new Pizza(rawPizzaData)
        _store.addPizza(cookedPizza)
        _store.saveState()
    }

    constructor() {
        console.log("hello from the pizza service");

    }
}

const SERVICE = new PizzasService()
export default SERVICE
