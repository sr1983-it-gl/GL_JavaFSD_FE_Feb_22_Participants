
import Cart from "../Cart";
import { products } from "../products-data";

type CartManagerModel = {
  cart: Cart
}

// model : CartManagerModel
// const CartManager = (model : CartManagerModel) => {
const CartManager = ({cart} : CartManagerModel) => {
  
  return (
    <div style={{backgroundColor: 'lightgreen'}}>

      <h3>My Cart</h3>
      <hr></hr>

     {
        cart.cartItems.map( (cartItem) => (

          <div>
              {cartItem.product.name} {cartItem.quantity}
          </div>
        ))
     }

    </div>
  );
}

export {CartManager};