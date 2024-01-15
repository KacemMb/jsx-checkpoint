import React from 'react'
import product from '../Product'
import { Card } from 'react-bootstrap'
function MyName() {
  return (
    <Card.Title>{product.name}</Card.Title>
  )
}

export default MyName
