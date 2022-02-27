import React from 'react'
import styled from 'styled-components'
import ProductSelectDetails from './ProductSelectDetails'
import ProductSelectImage from './ProductSelectImage'
import { productsData } from '../products/utils'

const ProductSelect = () => {
    // for (let i = 0; i < productsData.length; i++) {
    //     console.log(productsData[i])
    // }
  return (
    <StyledProductSelect>
        <div>
            {productsData.map((item) => (
                <ProductSelectImage
                    productImage = {item.img[0]}
                />
            ))}
        </div>
        <div>
            {productsData.map((item) => (    
                <ProductSelectDetails
                    productTitle= {item.title[0]}
                    productPrice = {item.price[0]}
                    productDescription= {item.desc[0]}
                />
            ))}
        </div>
    </StyledProductSelect>
  )
}

const StyledProductSelect = styled.div`
    display: flex;
`
export default ProductSelect