import React from 'react'
import styled from 'styled-components'
import NavBar from '../navbar/Navbar'
import Products from '../products/Products'
// import ProductSelect from '../products/ProductSelect'

const Cartegory = () => {
  return (
    <StyledSection>
      <NavBar/>
      <Products/>
      {/* <ProductSelect/> */}
    </StyledSection>
  )
}
const StyledSection = styled.section`

`
export default Cartegory