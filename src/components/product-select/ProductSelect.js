import React from 'react'
import styled from 'styled-components'
import ProductSelectDetails from './ProductSelectDetails'
import ProductSelectImage from './ProductSelectImage'
import { productsData } from '../../utils'

const ProductSelect = ({x}) => {
    
  return (
    <StyledProductSelect>
        <div>
            {[productsData[x]].map((item) => (
                <ProductSelectImage
                    productImage = {item.img}
                    key = {item.id}
                />
            ))}
        </div>
        <div className= 'product-select__details'>
            {[productsData[x]].map((item) => (    
                <ProductSelectDetails
                    productTitle= {item.title}
                    productPrice = {item.price}
                    productDescription= {item.desc}
                    productBrand = {item.titlebrand}
                    key = {item.id}
                />
            ))}
        </div>
    </StyledProductSelect>
  )
}

const StyledProductSelect = styled.div`
    display: flex;
    .product-select{
        &__details{
            max-width: 29.2rem;
        }
    }
`
export default ProductSelect