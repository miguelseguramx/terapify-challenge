import React from 'react';
import styled from 'styled-components';
import DayBarItem from './DayBarItem';

const DaysBarContainer = styled('div')`
  margin-left: 50px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 1fr;
  width: calc(100% - 50px);
  grid-area: 1 / 1 / 2 / 3;

  @media(min-width: 1200px){
    padding-right: 17px;
  }

  h1{
    text-align: center;
  }
`

const days = ['Dom', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa']

const DaysBar = ({ dates }) => {
  return (
    <DaysBarContainer>
      {
        dates.map((date, index) => (
          <DayBarItem key={date} date={date} day={days[index]}/>
        ))
      }
    </DaysBarContainer>
  )
}

export default DaysBar
