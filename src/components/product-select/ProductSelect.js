import React from 'react'
import styled from 'styled-components'
import ProductSelectDetails from './ProductSelectDetails'
import ProductSelectImage from './ProductSelectImage'
import { productsData } from '../../utils'

const ProductSelect = () => {
    // for (let i = 0; i < productsData.length; i++) {
    //     console.log(productsData[i])
    // }
  return (
    <StyledProductSelect>
        <div>
            {[productsData[0]].map((item) => (
                <ProductSelectImage
                    productImage = {item.img}
                />
            ))}
        </div>
        <div className= 'product-select__details'>
            {[productsData[0]].map((item) => (    
                <ProductSelectDetails
                    productTitle= {item.title}
                    productPrice = {item.price}
                    productDescription= {item.desc}
                    productBrand = {item.titlebrand}
                />
            ))}
        </div>
    </StyledProductSelect>
  )
}

const StyledProductSelect = styled.div`
    display: flex;
    /* justify-content: space-between; */
    .product-select{
        &__details{
            max-width: 29.2rem;
        }
    }
`
export default ProductSelect