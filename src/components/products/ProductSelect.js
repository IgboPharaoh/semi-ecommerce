import React from 'react'
import styled from 'styled-components'
import ProductSelectImage from './ProductSelectImage'
import { productsData } from './utils'

const ProductSelect = () => {
  return (
    <StlyedProductSelect>
        <div>
            {productsData}
            <ProductSelectImage
            />
        </div>
        <div>
            
        </div>
    </StlyedProductSelect>
  )
}

const StlyedProductSelect = styled.section`

`
export default ProductSelect