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

      let foodItemUIElement 
        = foodItemObj.constructUI();
      
      foodCategoryObj.constructUI(foodItemUIElement);
    })      
  }

  displayQuickNavigationPanelUI(){

    
    let foodCategories = FoodCategoryFactory.getCategories();

    foodCategories.forEach((foodCategory) => {

      let foodItem = FoodItems.loadItem(foodCategory);
      
      let foodItemUIElement = foodItem.constructQuickNavigationUI();
      foodCategory.constructQuickNavigationUI(foodItemUIElement);
      
    })
  }

}

export {FoodDisplayUI}