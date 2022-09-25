
class CartUI{

  constructor(cartModel){
    this.cartModel = cartModel;
  }

  render(){

    this.constructTableView();
    this.constructSummaryView();


    let cartPlusElement = document.getElementById("cart-plus");
    cartPlusElement.innerText = this.cartModel.totalNoOfItems + " Item(s)";
  }

  constructTableView(){

  }

  constructSummaryView(){

  }

}

export {CartUI}