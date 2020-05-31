import React from 'react';
import styled from 'styled-components';

const NavBar = styled('div')`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  
    .nav-bar__item{
      border: none;
      outline: none;
      background-color: white;
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

const HomeNavBar = ({ status, setStatus }) => (
  <NavBar>
    <button 
      className={`nav-bar__item ${status === 'Proxima' && 'nav-bar__item-active' }`}
      onClick={() => setStatus('Proxima')}
    >
      <p className="nav-bar__text">Proximas</p>
    </button>
    <button 
      className={`nav-bar__item ${status === 'Finalizada' && 'nav-bar__item-active' }`}
      onClick={() => setStatus('Finalizada')}
    >
      <p className="nav-bar__text">Finalizadas</p>
    </button>
    <button 
      className={`nav-bar__item ${status === 'Cancelada' && 'nav-bar__item-active' }`}
      onClick={() => setStatus('Cancelada')}
    >
      <p className="nav-bar__text">Canceladas</p>
    </button>
  </NavBar>
)

export default HomeNavBar


