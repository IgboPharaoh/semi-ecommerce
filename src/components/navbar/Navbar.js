import React from 'react'
import styled from 'styled-components'
import NavLink from './Navlink'
import { navData } from './utils'
import logo from '../../assets/logo.svg'
import cart from '../../assets/cart.svg'
import { BsCurrencyDollar } from 'react-icons/bs';

const Navbar = () => {

  const navDetails = navData
  return (
    <StyledNav>
        <nav>
            <section className="nav-section__left">
                {navDetails.map((x)=> (<NavLink navText= {x} className="link-text"/>  ))}
            </section>
            <img src={logo} alt="logo"/>
            <section className="nav-section__right">
                <select>
                    <option data-icon='BsCurrencyDollar' > <BsCurrencyDollar/>USD</option>
                    <option>EUR</option>
                    <option>JPY</option>
                </select>
                <img src={cart} alt="logo"/>
            </section>
        </nav>
    </StyledNav>
  )
}
const StyledNav = styled.nav`
    display: grid;
    align-items: center;
    height: 8rem;
    background: white;
    position: relative;

    nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .nav-section{
        &__left{
            display: flex;
            justify-content: space-between;
            width: 23.4rem;
            margin: 0.4rem 1.6rem 0rem;
        }
        &__right{
            display: flex;
            align-items: center;
        }
    }
`
export default Navbar