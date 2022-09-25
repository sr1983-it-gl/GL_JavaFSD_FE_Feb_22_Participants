import { FoodCategory } from "./food-category.js";

class FoodCategoryFactory{

  getTest(){
    return "test";
  }

  getArr1(){

    return new Array("1", "2");
  }

  getArr2(){

    return new Array(
      new FoodCategory("1"),
      new FoodCategory("2")
    );
  }

  static getCategories(){

    let result = new Array();

    result.push(new FoodCategory(
      FoodCategory.FOOD_CATEGORY_BIRYANI));

    result.push(new FoodCategory(
      FoodCategory.FOOD_CATEGORY_CHICKEN));

    result.push(new FoodCategory(
      FoodCategory.FOOD_CATEGORY_CHINESE));
            
      result.push(new FoodCategory(
        FoodCategory.FOOD_CATEGORY_PANEER));

        result.push(new FoodCategory(
          FoodCategory.FOOD_CATEGORY_SOUTH_INDIAN));

          result.push(new FoodCategory(
            FoodCategory.FOOD_CATEGORY_VEGETABLE));
                
      return result;
  }

  getCategories_bk(){

    return 


    new Array(
      new FoodCategory(
        FoodCategory.FOOD_CATEGORY_BIRYANI),
      new FoodCategory(
        FoodCategory.FOOD_CATEGORY_CHICKEN),
      new FoodCategory(
        FoodCategory.FOOD_CATEGORY_CHINESE),
      new FoodCategory(
        FoodCategory.FOOD_CATEGORY_PANEER),
      new FoodCategory(
        FoodCategory.FOOD_CATEGORY_SOUTH_INDIAN),
      new FoodCategory(
        FoodCategory.FOOD_CATEGORY_VEGETABLE)
    );
  }
}


let fcf = new FoodCategoryFactory();
// console.log(fcf.getTest());

console.log(FoodCategoryFactory.getCategories());



// console.log(fcf.getCategories());

export {FoodCategoryFactory}