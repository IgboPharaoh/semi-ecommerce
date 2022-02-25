import React from 'react'
import styled from 'styled-components'

const Navlink = ({navText, linkPath, className, borderClassName}) => {
  return (
    <StyledNavLink>
        <ul>
            <li>
                <a href={linkPath} className= {className}>{navText}</a>
                <div className={borderClassName || 'border-bottom'}></div>
            </li>
        </ul>
    </StyledNavLink>
  )
}
const StyledNavLink = styled.div`
    display: flex;
    font-size: 1.6rem;
    line-height: 1.92rem;
    cursor: pointer;
    .border-bottom{
        background-color:var(--primaryGreen);
        height: 2px;
        position: relative;
        top: 1rem;
        left: 0rem;
        bottom: 0rem;
        display: none;
    }
    :hover{
        color: var(--primaryGreen);
        font-weight: 600;
        .border-bottom{
        display: block;
    }
    }
`
export default Navlink