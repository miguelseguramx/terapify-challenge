import React from 'react';
import styled from 'styled-components';
import Wrapper from './Wrapper';

const HeaderContainer = styled('header')`
  background-color: var(--white);

  .header__title{
    font-weight: var(--bold);
    text-align: center;
    font-size: var(--font-xl);
    margin: auto;
    padding: 20px 0 10px;
  }
`

const Header = (props) => (
  <HeaderContainer>
    <Wrapper>
      <h1 className="header__title">Citas</h1>
      {props.children}
    </Wrapper>
  </HeaderContainer>
)

export default Header
