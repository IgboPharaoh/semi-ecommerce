import React from 'react'
import styled from 'styled-components'

const ProductSelectImage = ({productImage}) => {
  return (
    <StyledImage>
      <div className="product-image__small">
        <img src={productImage} alt="item-img" className="product-select__small-img"/>
        <img src={productImage} alt="item-img" className="product-select__small-img"/>
        <img src={productImage} alt="item-img" className="product-select__small-img"/>
      </div>
      <div>
        <img src={productImage} alt="item-img" className="product-select__big-img"/>
      </div>
    </StyledImage>
  )
}
const StyledImage = styled.img`
  display: flex;
  .product-image{
    &__small{
      display: flex;
      flex-direction: column;
    }
    &__small-img {
      height: 8rem;
      width: 8rem;
      padding-bottom: 4rem;
    }
    &__big-img {
      height: 61rem;
      width: 51.1rem;
      padding: 0rem 4rem 10rem 0rem;
    }
  }
`
export default ProductSelectImage