import React from 'react';
import styled from 'styled-components';

const Uwrapper = styled('div')`
  max-width: var(--wrapper-size);
  margin: auto;
`

const Wrapper = (props) => (
  <Uwrapper>
    {props.children}
  </Uwrapper>
)

export default Wrapper
