import React from 'react'
import product from '../Product'
import { Card } from 'react-bootstrap';
function MyImage() {
  return (
    <Card.Img variant="top" src={product.imageURL} />
  )
}

export default MyImage;
