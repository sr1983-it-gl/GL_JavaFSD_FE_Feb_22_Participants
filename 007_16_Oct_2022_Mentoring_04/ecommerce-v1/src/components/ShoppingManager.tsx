import { CartManager } from "./CartManager";
import { ProductsLister } from "./ProductsLister";

import {Row, Col, Container} from "react-bootstrap";
import Cart, {CartItem} from "../Cart";
import { ProductModel, products } from "../products-data";

import {useState} from "react";

const ShoppingManager = () => {

  const defaultCart : Cart = {

    cartItems: [
      {product: products[1], quantity: 10},
      {product: products[4], quantity: 5},
      {product: products[5], quantity: 3}
    ]
  }

  const [cart, setCart] = useState(defaultCart);

  const addToCart = (incomingProductItem : ProductModel) => {

    // Check for existing cart for the productItem
      
    const matchedProduct = 
    cart.cartItems.find( (cartItem) => (      
      cartItem.product.id === incomingProductItem.id
    ));    

    // {product-1, 2} {product-2, 3} 
    if (matchedProduct){

      const updatedCartItems = cart.cartItems.map( (cartItem) => {

        if (cartItem.product.id === incomingProductItem.id){

          // Incoming Product - already present in the cart
          const updatedCartItem = {
            product: cartItem.product,
            quantity: cartItem.quantity + 1
          }
          return updatedCartItem;
        }else{

          const newCartItem = {
            product: cartItem.product,
            quantity : cartItem.quantity
          }
          return newCartItem;
        }
      })


      const updatedCart : Cart = {
        cartItems : updatedCartItems
      }

      // {product-1, 3} {product-2, 3} 
      setCart(updatedCart);
    }else{

      const newCartItem = {
        product: incomingProductItem,
        quantity: 1
      }

      const updatedCartItems = 
        [...cart.cartItems, newCartItem]

      const updatedCart : Cart = {
        cartItems : updatedCartItems
      }

      setCart(updatedCart);
    }
  }

  const removeFromCart = (incomingProductItem : ProductModel) => {

    const updatedCartItems : CartItem[] = [];

    cart.cartItems.forEach( (cartItem) => {

      if (cartItem.product.id === incomingProductItem.id){

        if (cartItem.quantity === 1){

          // If Quantity is 1, then remove it
          // ?
          // Do nothing
        }else{

          let updatedCartItem : CartItem = {
            product : cartItem.product,
            quantity: cartItem.quantity - 1
          }

          updatedCartItems.push(updatedCartItem);
        }
      }else{
        updatedCartItems.push(cartItem);
      }
    })

    const updatedCart : Cart = {
      cartItems : updatedCartItems
    }

    setCart(updatedCart);
  }

  return (

    <Container>
      <Row>
        <Col lg={9}><ProductsLister 
          addToCart={addToCart}
          removeFromCart={removeFromCart}></ProductsLister></Col>
        <Col><CartManager cart={cart}></CartManager></Col>
      </Row>
    </Container>

  );
}

export {ShoppingManager};