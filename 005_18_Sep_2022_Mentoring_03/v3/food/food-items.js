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

  static loadItem(foodCategory){

    let foodItem = 
    foodItemsDataArray.find( (foodItem) => 
      foodItem.category == foodCategory.name
    )

    let foodItemObj 
    = FoodItems.convert(foodItem);
    return foodItemObj;
  }

  static findById(foodItemID){

    let foodItemDataObj = foodItemsDataArray.find((foodItemData) => 
      foodItemData.id == foodItemID
    );

    let foodItemObj = FoodItems.convert(foodItemDataObj);
    return foodItemObj;
  }

  static convert(foodItemData){

    return new FoodItem(
      foodItemData.id,
      foodItemData.name,
      foodItemData.category,
      foodItemData.rating,
      foodItemData.price,
      foodItemData.img,
      foodItemData.quantity
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