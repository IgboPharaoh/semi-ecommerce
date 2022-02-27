import React from 'react'
import styled from 'styled-components'
import CustomButton from '../button/CustomButton'

const ProductSelectDetails = ({productTitle, productPrice, productDescription}) => {
  return (
    <StyledSection>
        <h1 className="product-details__title">{productTitle}</h1>
        <section className="product-details__size-section">
            <p className="product-details__size-header">SIZE:</p>
            <div className="product-details__size-buttons">
                <CustomButton/>
            </div>
        </section>
        <section className="product-details__price-section">
            <p className="product-details__price-header">PRICE:</p>
            <h5 className="product-details__price-amount">${productPrice}</h5>
        </section>
        <section className="product-details__add-to-cart-section">
            <CustomButton/>
            <p className="product-details__product-description">{productDescription}</p>
        </section>
    </StyledSection>
  )
}

const StyledSection = styled.div`
    
`
export default ProductSelectDetails