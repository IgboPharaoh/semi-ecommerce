import React from 'react'
import styled from 'styled-components'
import NavLink from './Navlink'
import { navData } from './utils'

const Navbar = () => {

  const navDetails = navData
  return (
    <StyledNav>
        <nav>
            <section className="nav-section__left">
                {navDetails.map((x)=> (
                    <NavLink
                        navText= {x}
                    />
                ))}
            </section>
            <section className="nav-section__center"></section>
            <section className="nav-section__right"></section>
        </nav>
    </StyledNav>
  )
}
const StyledNav = styled.nav`
    display: flex;
    .nav-section{
        &__left{
            display: flex;
            justify-content: space-between;
            width: 19rem;
        }
    }
`
export default Navbar