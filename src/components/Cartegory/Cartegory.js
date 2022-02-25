import React from 'react'
import styled from 'styled-components'
import NavBar from '../navbar/Navbar'
import Products from '../products/Products'

const Cartegory = () => {
  return (
    <StyledSection>
      <NavBar/>
      <Products/>
    </StyledSection>
  )
}
const StyledSection = styled.section`

`
export default Cartegory