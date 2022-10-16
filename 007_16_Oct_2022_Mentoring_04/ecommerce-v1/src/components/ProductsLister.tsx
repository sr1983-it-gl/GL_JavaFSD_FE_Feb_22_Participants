
import { ProductModel, products } from "../products-data";
import { Card, Button, Col, Row } from "react-bootstrap";

type ProductsListerModel = {

  addToCart : (productItem : ProductModel) => void;
  removeFromCart : (productItem : ProductModel) => void;

}

// const ProductsLister = (model : ProductsListerModel) => {
  const ProductsLister = ({addToCart, removeFromCart} : ProductsListerModel) => {

  return (
    <div style={{ backgroundColor: 'lightblue' }}>

      <h3>Listing All products</h3>
      <hr></hr>

    <Row>
      {

        products.map((productItem) => (

          <Col>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={productItem.image} />
            <Card.Body>
              <Card.Title>{productItem.name}</Card.Title>
              <Card.Text>
                {productItem.price}
              </Card.Text>

              <Button variant="primary" onClick={

                () => {
                  addToCart(productItem)
                }

              }>Add To My Cart
              </Button>

              <Button variant="primary" onClick={

                () => {
                  removeFromCart(productItem)
                }

              }>Remove from Cart
              </Button>

            </Card.Body>
          </Card>

          </Col>
        )
        )
      }
    </Row>

    </div>
  )
}

export { ProductsLister };