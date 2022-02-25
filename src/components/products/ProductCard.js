import React from 'react'
import styled from 'styled-components'

const ProductCard = ({img, title, price}) => {
  return (
    <StyledCard>
        <img src={img} alt="product-img" className="product-card__product-img"/>
        <div className="product-card__cart-section">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.5613 4.87359C19.1822 4.41031 18.5924 4.12873 17.9821 4.12873H5.15889L4.75914 2.63901C4.52718 1.77302 3.72769 1.16895 2.80069 1.16895H0.653099C0.295301 1.16895 0 1.45052 0 1.79347C0 2.13562 0.294459 2.418 0.653099 2.418H2.80069C3.11654 2.418 3.39045 2.61936 3.47434 2.92139L6.04306 12.7077C6.27502 13.5737 7.07451 14.1778 8.00152 14.1778H16.4028C17.3289 14.1778 18.1507 13.5737 18.3612 12.7077L19.9405 6.50575C20.0877 5.941 19.9619 5.33693 19.5613 4.87365L19.5613 4.87359ZM18.6566 6.22252L17.0773 12.4245C16.9934 12.7265 16.7195 12.9279 16.4036 12.9279H8.00154C7.68569 12.9279 7.41178 12.7265 7.32789 12.4245L5.49611 5.39756H17.983C18.1936 5.39756 18.4042 5.49824 18.5308 5.65948C18.6567 5.81994 18.7192 6.0213 18.6567 6.22266L18.6566 6.22252Z" fill="#43464E"/>
                <path d="M8.44437 14.9815C7.2443 14.9815 6.25488 15.9277 6.25488 17.0752C6.25488 18.2227 7.24439 19.1689 8.44437 19.1689C9.64445 19.1697 10.6339 18.2235 10.6339 17.0758C10.6339 15.9282 9.64436 14.9813 8.44437 14.9813V14.9815ZM8.44437 17.9012C7.9599 17.9012 7.58071 17.5386 7.58071 17.0753C7.58071 16.612 7.9599 16.2494 8.44437 16.2494C8.92885 16.2494 9.30804 16.612 9.30804 17.0753C9.30722 17.5189 8.90748 17.9012 8.44437 17.9012Z" fill="#43464E"/>
                <path d="M15.6875 14.9814C14.4875 14.9814 13.498 15.9277 13.498 17.0752C13.498 18.2226 14.4876 19.1689 15.6875 19.1689C16.8875 19.1689 17.877 18.2226 17.877 17.0752C17.8565 15.9284 16.8875 14.9814 15.6875 14.9814ZM15.6875 17.9011C15.2031 17.9011 14.8239 17.5385 14.8239 17.0752C14.8239 16.612 15.2031 16.2493 15.6875 16.2493C16.172 16.2493 16.5512 16.612 16.5512 17.0752C16.5512 17.5188 16.1506 17.9011 15.6875 17.9011Z" fill="#43464E"/>
            </svg>
        </div>
        <div className="product-card__text-section">
            <p className="product-card__product-title">{title}</p>
            <p className="product-card__product-price">${price}</p>
        </div>
    </StyledCard>
  )
}

const StyledCard = styled.div`
    padding: 1.6rem;
    
    .product-card{
        &__product-img{
            height: 33rem;
        }
        &__cart-section{
            /* justify-content: space-between; */
            float: right;
            background: var(--primaryGreen);
            height: 5.2rem;
            width: 5.2rem;
            border-radius: 50%;
            display: none; 
            svg {
            height: 100%;
            padding-left: 1.4rem;
            path{
                fill: white;
            }
        }
        }
        &__text-section{
            padding-top: 2.4rem;
        }
        &__product-title{
            font-size: 1.8rem;
            line-height: 2.88rem;
            font-weight: 300;
        }
        &__product-price{
            font-size: 1.8rem;
            line-height: 2.88rem;
            font-weight: 500;
        }
    }
    :hover{
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        .product-card{
            &__cart-section{
                display: block;
            }
        }
    }
`
export default ProductCard