import React from 'react'
import styled from 'styled-components'
import Cartegory from '../Cartegory/Cartegory'

const Layout = () => {
  return (
    <StyledLayout>
        <Cartegory/>
    </StyledLayout>
  )
}
const StyledLayout = styled.section`
    margin: 0 auto;
    padding: 0rem 10rem;
`

export default Layout