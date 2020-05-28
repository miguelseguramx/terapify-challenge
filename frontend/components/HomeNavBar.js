import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'

const NavBar = styled('div')`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  
    .nav-bar__item{
      transition-duration: 3ms;
      color: var(--clear-text);
      transition-duration: 3ms;
      border-bottom: 5px solid transparent;
    }
      .nav-bar__item:hover{
        color: var(--clear-text);
        border-bottom: 5px solid var(--clear-text);
      }
      .nav-bar__item-active{
        color: var(--primary);
        border-bottom: 5px solid var(--primary);
      }
      .nav-bar__item-active:hover{
        color: var(--primary);
        border-bottom: 5px solid var(--primary);
      }
    .nav-bar__text{
      text-align: center;
      font-size: var(--font-md);
      font-weight: var(--semi-bold);
      text-transform: uppercase;
      padding: 10px 0 15px;
    }
`

const HomeNavBar = ({ status }) => (
  <NavBar>
    <Link href="/">
      <a className={`nav-bar__item ${status === 'Proxima' && 'nav-bar__item-active' }`}>
        <p className="nav-bar__text">Proximas</p>
      </a>
    </Link>
    <Link href="/finalizadas">
      <a className={`nav-bar__item ${status === 'Finalizada' && 'nav-bar__item-active' }`}>
        <p className="nav-bar__text">Finalizadas</p>
      </a>
    </Link>
    <Link href="canceladas">
      <a className={`nav-bar__item ${status === 'Cancelada' && 'nav-bar__item-active' }`}>
        <p className="nav-bar__text">Canceladas</p>
      </a>
    </Link>
  </NavBar>
)

export default HomeNavBar


