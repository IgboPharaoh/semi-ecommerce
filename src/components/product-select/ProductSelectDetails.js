import React from 'react'
import styled from 'styled-components'
import CustomButton from '../button/CustomButton'

const ProductSelectDetails = ({productTitle, productPrice, productDescription, productBrand}) => {
  return (
    <StyledSection>
        <h1 className="product-details__title">{productBrand}</h1>
        <h3 className="product-details__sub-title">{productTitle}</h3>
        <section className="product-details__size-section">
            <p className="product-details__size-header">SIZE:</p>
            <div className="product-details__size-buttons">
                <CustomButton
                    buttonText = 'XS'
                    fontSize = '1.6'
                    fontWeight = '400'
                    paddingTopAndBottom= "1.4"
                    paddingRightAndLeft= "2.4"
                    buttonWidth = "6.4rem"
                    backgroundColor = 'var(--white)'
                    textColor = 'var(--gray)'
                    border = '1px solid var(--gray)'
                    hoverBackgroundColor = 'var(--white)'
                    hoverTextColor = 'var(--primaryBlack)'
                    hoverBorderColor = '1px solid var(--primaryBlack)'
                />
                <CustomButton
                    buttonText = 'S'
                    fontSize = '1.6'
                    fontWeight = '400'
                    paddingTopAndBottom= "1.4"
                    paddingRightAndLeft= "2.4"
                    buttonWidth = "6.4rem"
                    backgroundColor = 'var(--primaryBlack)'
                    textColor = 'var(--white)'
                    border = '1px solid var(--primaryBlack)'
                    hoverBackgroundColor = 'var(--white)'
                    hoverTextColor = 'var(--primaryBlack)'
                    hoverBorderColor = '1px solid var(--primaryBlack)'
                />
                <CustomButton
                    buttonText = 'M'
                    fontSize = '1.6'
                    fontWeight = '400'
                    paddingTopAndBottom= "1.4"
                    paddingRightAndLeft= "2.4"
                    buttonWidth = "6.4rem"
                    backgroundColor = 'white'
                    textColor = 'var(--primaryBlack)'
                    border = '1px solid var(--primaryBlack)'
                    hoverBackgroundColor = 'var(--white)'
                    hoverTextColor = 'var(--primaryBlack)'
                    hoverBorderColor = '1px solid var(--primaryBlack)'
                />
                <CustomButton
                    buttonText = 'L'
                    fontSize = '1.6'
                    fontWeight = '400'
                    paddingTopAndBottom= "1.4"
                    paddingRightAndLeft= "2.4"
                    buttonWidth = "6.4rem"
                    backgroundColor = 'white'
                    textColor = 'var(--primaryBlack)'
                    border = '1px solid var(--primaryBlack)'
                    hoverBackgroundColor = 'var(--white)'
                    hoverTextColor = 'var(--primaryBlack)'
                    hoverBorderColor = '1px solid var(--primaryBlack)'
                />
                
            </div>
        </section>
        <section className="product-details__price-section">
            <p className="product-details__price-header">PRICE:</p>
            <h5 className="product-details__price-amount">${productPrice}.00</h5>
        </section>
        <section className="product-details__add-to-cart-section">
            <CustomButton
                    buttonText = 'ADD TO CART'
                    fontSize = '1.6'
                    fontWeight = '600'
                    paddingRightAndLeft= "9.35"
                    buttonWidth = "100%"
                    textColor = 'var(--white)'
                    border = 'none'
                    hoverBackgroundColor = 'var(--white)'
                    hoverTextColor = 'var(--primaryGreen)'
                    hoverBorderColor = '1px solid var(--primaryGreen)'
                    className="add-to-cartbtn"
            />
            <p className="product-details__product-description">{productDescription}</p>
        </section>
    </StyledSection>
  )
}

const StyledSection = styled.div`
    .product-details{
        &__title{
            font-size: 3rem;
            font-weight: 600;
        }
        &__sub-title{
            font-size: 3rem;
            padding: 1.6rem 0rem 4.3rem 0rem;
        }
        &__title, &__sub-title{
            line-height: 2.7rem;
        }
        &__size-header, &__price-header{
            font-size:1.8rem;
            font-weight: 700;
            font-family: 'Roboto Condensed';
        }
        &__size-buttons{
            display: flex;
            justify-content: space-between;
            padding: 0.8rem 0 4rem;
        }
        &__price-amount{
            font-size: 2.4rem;
            font-weight: 700;
            line-height: 4.6rem;
            padding-top: 1rem;
        }
        &__add-to-cart-section{
            padding-top: 2rem;
        }
        &__product-description{
            padding-top: 4rem;
            font-size: 1.6rem;
            font-family: 'Roboto Condensed';
            font-weight: 400;
            line-height: 2.4rem;
        }
    }
    .add-to-cartbtn{
        :hover{
            border-radius: 5rem;
            transition: ease-in-out 0.5s ;
        }
    }
`
export default ProductSelectDetails