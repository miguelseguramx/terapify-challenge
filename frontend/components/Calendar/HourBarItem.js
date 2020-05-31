import React from 'react';
import styled from 'styled-components';

const HourBarItemContainer = styled('div')`
  position: relative;
  min-width: 50px;
  min-height: 50px;
  
  .hour{
    position: absolute;
    bottom: -8px;
    text-align: center;
    color: var(--clearer-text);
    font-size: var(--font-sm);
    margin-left: 10px;
  }
`

const HourBarItem = ({ hour }) =>  (
  <HourBarItemContainer>
    <p className="hour">{hour}</p>
  </HourBarItemContainer>
)

export default HourBarItem
