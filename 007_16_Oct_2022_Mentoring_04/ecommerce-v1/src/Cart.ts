import { ProductModel } from "./products-data"

export type CartItem = {

  product : ProductModel
  quantity : number
}

type Cart = {

  cartItems: CartItem[]

}

export default Cart;