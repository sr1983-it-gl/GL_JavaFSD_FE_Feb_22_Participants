import {FoodCategory} from "./food-category.js"

class FoodItem {

  constructor(id, name, category, userRating, price,
    imagePath, quantity){

      this.id = id;
      this.name = name;
      this.category = category;
      this.userRating = userRating;
      this.price = price;
      this.imagePath = imagePath;
      this.quantity = quantity;
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

  constructQuickNavigationUI(){

    let listCardElement = document.createElement("div");
    listCardElement.setAttribute("class", "list-card");

    let imageElement = document.createElement("img");
    imageElement.src = this.imagePath;

    let anchorElement  = document.createElement("a");
    anchorElement.setAttribute("class", "list-name");
    anchorElement.setAttribute("href", new String("#" + this.category));
    anchorElement.innerText = this.category;

    listCardElement.append(imageElement);
    listCardElement.append(anchorElement);

    return listCardElement;
  }

  display(){
    console.log(`Name of the food item is ${this.name}`);
  }
}

export {FoodItem}