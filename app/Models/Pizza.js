import { generateId } from "../utils.js";

export default class Pizza {
    constructor(data) {
        this.id = data.id || generateId()
        this.name = data.name || "Pepperoni"
        /**@type {string[]} */
        this.toppings = data.toppings || []
    }

    get Template() {

        let template = /* html */ `
            <div class="col-3">
                        <h1>${this.name}</h1>
                        <form onsubmit="app.pizzasController.addTopping(event, '${this.id}')">
                            <div class="form-group">
                                <label for="toppingName">Topping Name</label>
                                <input type="text" name="toppingName" class="form-control" placeholder="Enter Topping Name...">
                            </div>
                            <button type="submit" class="btn btn-outline-success">Add Topping</button>
                        </form>
                        `

        this.toppings.forEach(topping => template += `<p>${topping}</p>`)

        template += '</div>'

        return template
    }
}
