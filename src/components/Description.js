import React from 'react'
import product from '../Product'
import { Card } from 'react-bootstrap'
function Description() {
  return (
    <Card.Text>{product.description}</Card.Text>
  )
}

export default Description
