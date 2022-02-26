import React from 'react'
import styled from 'styled-components'
import CustomButton from '../button/CustomButton'

const ProductSelectDetails = ({productTitle, productPrice, productDescription}) => {
  return (
    <StyledSection>
        <h1>{productTitle}</h1>
        <section>
            <p>SIZE:</p>
            <div>
                <CustomButton/>
            </div>
        </section>
        <section>
            <p>PRICE:</p>
            <h5>${productPrice}</h5>
        </section>
        <section>
            <CustomButton/>
            <p>{productDescription}</p>
        </section>
    </StyledSection>
  )
}

const StyledSection = styled.div`

`
export default ProductSelectDetails