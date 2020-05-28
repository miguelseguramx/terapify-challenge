import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled('div')`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--opacity-mask);
  display: flex; 
  align-items: center;
  justify-content: center;
  
  @media (min-width: 1000px){
    height: 100vh;
  }
`

const Modal = (props) => (
  <ModalOverlay>
    {props.children}
  </ModalOverlay>
)

export default Modal;
