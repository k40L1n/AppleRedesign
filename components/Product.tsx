import React from "react"

interface Props {
  product: Product
}

function Product({ product }: Props) {
  return <div className='text-white'>{product.title}</div>
}

export default Product
