import {FoodCategory} from "./food-category.js"

class FoodItem {

  constructor(id, name, category, userRating, price,
    imagePath){

      this.id = id;
      this.name = name;
      this.category = category;
      this.userRating = userRating;
      this.price = price;
      // this.imageName = imageName;

      this.imagePath = imagePath;
  }

  constructUI(){

    let foodElement 
      = document.createElement("div");
    foodElement.setAttribute("id", "item-card");

    let cardTopElement = 
      document.createElement("div");
    cardTopElement.setAttribute("id", "card-top");

    let starElement = document.createElement("i");
    starElement.setAttribute("class", "fa fa-star");
    starElement.setAttribute("id", "rating");
    starElement.innerText = this.userRating;

    let heartElement = document.createElement("i");
    heartElement.setAttribute("class", "fa fa-heart-o add-to-cart");
    heartElement.setAttribute("id", this.id);

    cardTopElement.appendChild(starElement);
    cardTopElement.appendChild(heartElement);

    let imageElement = document.createElement("img");
    imageElement.src = this.imagePath;

    let itemNameElement = document.createElement("p");
    itemNameElement.setAttribute("id", "item-name");
    itemNameElement.innerText = this.name;

    let itemPriceElement = document.createElement("p");
    itemPriceElement.setAttribute("id", "item-price");
    itemPriceElement.innerText = `Price : $ ${this.price}`;

    foodElement.appendChild(cardTopElement);
    foodElement.appendChild(imageElement);
    foodElement.appendChild(itemNameElement);
    foodElement.appendChild(itemPriceElement);
    
    return foodElement;
  }

  display(){
    console.log(`Name of the food item is ${this.name}`);
  }
}

let fc1 = new FoodCategory(
  FoodCategory.FOOD_CATEGORY_BIRYANI);

let fi1 = new FoodItem(
  1, "Ambur Biryani", fc1, 4.5, 10,"");
fi1.display();

export {FoodItem}