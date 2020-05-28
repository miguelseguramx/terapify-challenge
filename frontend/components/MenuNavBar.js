import React, { useContext } from 'react';
import styled from 'styled-components';
import Wrapper from './Wrapper';
import AppContext from '../context/appContext';

const Footer = styled('footer')`
  background-color: var(--white);
  
  .nav-bar{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 0;
  }
  .menu__item{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .menu__icon{
    padding-top: 10px;
  }
  .menu__title{
    text-align: center;
    padding: 5px 0px 10px;
    font-weight: var(--bold);
    font-size: var(--font-sm);
  }
  .login{
    background-color: var(--primary);
    color: white;
    border: none;
    cursor: pointer;
    transition: all ease-in 0.2s;
    
    &:hover{
      background-color: var(--primary-hover);
    }

    &:active{
      transform: scale(1.01);
    }

    & .menu__title{
      padding: 0;
    }
  }
`

const FooterNavBar = () => {

  const { fakeLogout } = useContext(AppContext);

  return (
    <Footer>
      <Wrapper>
        <menu className="nav-bar nav-bar--footer">
          <div className="menu__item">
            <img src="/static/awesome-envelope-black.svg" alt="" className="menu__icon" />
            <p className="menu__title">Citas</p>
          </div>
          <div className="menu__item">
            <img src="/static/awesome-users-gray.svg" alt="" className="menu__icon" />
            <p className="menu__title">Pacientes</p>
          </div>
          <button className="menu__item login" onClick={() => fakeLogout()}>
            <p className="menu__title">Log Out</p>
          </button>
        </menu>
      </Wrapper>
    </Footer>
  )
}

export default FooterNavBar
