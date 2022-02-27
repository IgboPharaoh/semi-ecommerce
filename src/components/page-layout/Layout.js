import React from 'react'
import styled from 'styled-components'
import Cartegory from '../Cartegory/Cartegory'
import ProductSelect from '../product-select/ProductSelect'

const Layout = () => {
  return (
    <StyledLayout>
        <Cartegory/>
        <ProductSelect/>
    </StyledLayout>
  )
}
const StyledLayout = styled.section`
    margin: 0 auto;
    padding: 0rem 10rem;
    @media(max-width: 768px){
        padding: 0rem 1.6rem;
    }
`

export default Layout