import React from 'react'
import styled from 'styled-components'
import ProductCard from './ProductCard'

const Products = ({cartegory}) => {
  return (
    <StyledProducts>
        <h5  className="products-section__title">{cartegory || 'Cartegory Name'}</h5>
        <div className="products-section__left">
            <ProductCard
                title = "Apollo Running Short"
                price = '50.00'
            />
        </div>
    </StyledProducts>
  )
}
const StyledProducts = styled.section`
    .products-section{
        &__title{
            padding: 8rem 0rem 10.3rem;
            font-size: 4.2rem;
            line-height: 6.72rem;
        }
        &__left{
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(386px, 1fr));
            gap: 4rem;
        }
    }
`
export default Products