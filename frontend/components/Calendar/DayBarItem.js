import React from 'react';
import styled from 'styled-components';

const DaysBarItemContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 25px 0px;
  flex-direction: column;
  border: 1px solid var(--light-gray);
  
  p{
    flex-grow: 1;
    text-align: center;
    color: var(--clearer-text);
  }

  .day{
    font-size: var(--font-sm);
  }
  
  .date{
    font-weight: var(--bold);
    font-size: var(--font-lg);
  }
`

const DaysBarItem = ({ date, day }) =>  (
  <DaysBarItemContainer>
    <p className="day">{day}</p>
    <p className="date">{date}</p>
  </DaysBarItemContainer>
)

export default DaysBarItem
