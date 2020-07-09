import _pizzasService from '../Services/PizzasService.js'
import _store from '../store.js'

function _draw() {
    let template = ""

    _store.State.pizzas.forEach(pizza => template += pizza.Template)

    document.getElementById("pizzas").innerHTML = template
}



export default class PizzasController {
    constructor() {
        console.log("Hello from the pizza controller");
        // draw on page load
        _draw()
    }


    // e is our event
    addPizza(e) {
        e.preventDefault();
        let formData = e.target
        let rawPizzaData = {
            name: formData.pizzaName.value
        }
        _pizzasService.addPizza(rawPizzaData)
        formData.reset()
        _draw()
    }

    addTopping(event, pizzaId) {
        event.preventDefault();
        let rawToppingData = event.target.toppingName.value
        _pizzasService.addTopping(rawToppingData, pizzaId)
        event.target.reset()
        _draw()
    }

}