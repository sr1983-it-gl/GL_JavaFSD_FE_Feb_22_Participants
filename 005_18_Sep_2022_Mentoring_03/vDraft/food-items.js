import {FoodCategory} from "./food-category.js"
import {foodItemsDataArray} from "./food-item-data.js"
import { FoodItem } from "./food-item.js";

class FoodItems{

  static loadItems(foodCategory){

    let foodItemsResult = new Array();

    foodItemsDataArray.forEach((foodItemData) => {

      if (foodItemData.category 
          == foodCategory.getName()){

        let foodItemObj 
          = FoodItems.convert(foodItemData);
        foodItemsResult.push(foodItemObj);
      }
    });

    return foodItemsResult;
  }

  static convert(foodItemData){

    return new FoodItem(
      foodItemData.id,
      foodItemData.name,
      new FoodCategory(foodItemData.category),
      foodItemData.rating,
      foodItemData.price,
      foodItemData.img
    )
  }
}

let fc1 = new FoodCategory(
  FoodCategory.FOOD_CATEGORY_BIRYANI);
fc1.display();

let foodItemsObj = 
FoodItems.loadItems(fc1);
console.log(foodItemsObj);

export {FoodItems}