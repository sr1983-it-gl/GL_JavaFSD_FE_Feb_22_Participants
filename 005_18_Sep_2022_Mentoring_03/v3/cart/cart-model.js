
class CartModel{

  constructor(){

    this._items = [];
    this._totalNoOfItems = 0;
    this._totalPrice = 0;
  }

  add(item){

    this._items.push(item);
  }

  contains(item){

    let position = this._items.indexOf(item);
    return (position != -1) ? true : false;
  }

  isEmpty(){

    return (this._totalNoOfItems == 0) ? true : false;
  }

  get items(){
    return this._items;
  }

  get totalNoOfItems(){
    return this._totalNoOfItems;
  }

  get totalPrice(){
    return this._totalPrice;
  }

  update(foodItem){

    this.add(foodItem);

    this.updateTotalPrice();
    this._totalNoOfItems = this._items.length;
  }

  updateTotalPrice(){

    let price = 0;

    this._items.forEach( (foodItem) => {

      price = price + foodItem.price;    
      // TODO -Consider foodItem.quantity also  
    })

    this._totalPrice = price;
  }
}

export {CartModel}