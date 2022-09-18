import { FoodCategoryFactory } 
from "./food-category-factory.js";

import {FoodItems} from "./food-items.js"
import { FoodItem } from "./food-item.js";
import {FoodCategory} from "./food-category.js"

class FoodDisplayUI{

  displayMainPanelUI(){

    let foodCategories = 
      FoodCategoryFactory.getCategories();
  
    foodCategories.forEach((foodCategoryObj) => {

      this.displayMainPanelFoodItems(foodCategoryObj);
    })
  }

  displayMainPanelFoodItems(foodCategoryObj){

    let foodItemsObj 
      = FoodItems.loadItems(foodCategoryObj);
    console.log("Food Items Obj" + foodItemsObj);

    foodItemsObj.forEach((foodItemObj) => {

      console.log("Food item obj")
      console.log(foodItemObj);

      let foodItemUIElement 
        = foodItemObj.constructUI();
      
      foodCategoryObj.constructUI(foodItemUIElement);
    })      
  }

  displayQuickNavigationPanelUI(){

  }

}

let fc1 = new FoodCategory(
  FoodCategory.FOOD_CATEGORY_BIRYANI);
// fc1.display();

let foodItemsObj = 
FoodItems.loadItems(fc1);
// console.log(foodItemsObj);

let foodDisplayUI = new FoodDisplayUI();
foodDisplayUI.displayMainPanelUI();

export {FoodDisplayUI}