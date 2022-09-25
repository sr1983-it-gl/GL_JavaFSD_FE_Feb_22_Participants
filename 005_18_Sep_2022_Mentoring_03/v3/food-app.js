
import { CartModel } from "./cart/cart-model.js";
import { FoodDisplayController } from "./food/food-display-controller.js";
import {CartController} from "./cart/cart-controller.js";

let foodDisplayController = new FoodDisplayController();
foodDisplayController.init();

let cartModel = new CartModel();

let cartController = new CartController(cartModel);
cartController.init();
