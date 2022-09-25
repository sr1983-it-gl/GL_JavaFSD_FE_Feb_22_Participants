import { FoodItems } from "../food/food-items.js";
import { CartUI } from "./cart-ui.js";

class CartController{

  constructor(cartModel){
    this.cartModel = cartModel;
  }

  init(){

    let cartControllerObj = this;

    let allFoodItems = document.querySelectorAll(".add-to-cart")

    allFoodItems.forEach( (foodItem) => {

      foodItem.param1 = cartControllerObj;
      foodItem.addEventListener("click", cartControllerObj.handleCartAddition)
    })

  }

  handleCartAddition(event){

    let eventTarget = event.target;

    let cartControllerObj = eventTarget.param1;

    let foodItemID = eventTarget.getAttribute("id");
    
    let foodItemObj = FoodItems.findById(foodItemID);

    // Styling change
    document.getElementById(foodItemID).classList.add("toggle-heart")
    cartControllerObj.cartModel.update(foodItemObj);

    let cartUI = new CartUI(cartControllerObj.cartModel);
    cartUI.render();
  }
}

export {CartController};