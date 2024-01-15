import React from 'react'
import product from '../Product'
import { Button } from 'react-bootstrap'
function Price() {
  return (
    <Button variant="primary">{product.price}</Button>
  )
}

export default Price
