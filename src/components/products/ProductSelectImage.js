import React from 'react'
import styled from 'styled-components'

const ProductSelectImage = ({productImage}) => {
  return (
    <StyledImage>
      <div>
        <img src={productImage} alt="item-img" className="small-img"/>
      </div>
      <div>
        <img src={productImage} alt="item-img" className="big-img"/>
      </div>
    </StyledImage>
  )
}
const StyledImage = styled.img`
  display: flex;
  .small-img {
    height: 8rem;
    width: 8rem;
    padding-bottom: 4rem;
  }
  .big-img {
    height: 61rem;
    width: 51.1rem;
    padding: 0rem 4rem 10rem 0rem;
  }
`
export default ProductSelectImage