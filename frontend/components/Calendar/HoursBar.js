import React from 'react';
import styled from 'styled-components';
import HourBarItem from './HourBarItem';

const HoursBarContainer = styled('div')`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(24, 1fr);
  max-width: 50px;
`

const hours = [
  '1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 AM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM', '',
]

const HoursBar = () => {
  return (
    <HoursBarContainer>
      {
        hours.map(hour => (
          <HourBarItem key={hour} hour={hour}/>
        ))
      }
    </HoursBarContainer>
  )
}

export default HoursBar
