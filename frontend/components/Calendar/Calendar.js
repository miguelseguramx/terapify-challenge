import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import AppContext from '../../context/appContext'
import DaysBar from './DaysBar';
import HoursBar from './HoursBar';
import Day from './Day';

const CalendarContainer = styled('div')`
  background-color: var(--white);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 1fr;
  margin: auto;
  width: 100%;
  max-width: var(--wrapper-size);
  
  .calendar-grid-container{
    overflow-y: scroll;
    overflow-X: hidden;
    max-height: calc(100vh - 177px);
    position: relative;
    display: grid;
    grid-template-columns: 50px 1fr;
    grid-template-rows: 1fr;
  }

  .calendar-grid{
    display: grid;
    width: calc(100%);
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: 1fr;
    border: 1px solid var(--light-gray);
  }

  .change-week__container{
    padding: 0 20px;
    position: fixed;
    bottom: 30px;
    max-width: 1100px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
  }
  
  @media(min-width: 839px){
    padding: 20px 0px 0px;
  }
`

const ChangeWeek = styled('button')`
  visibility: ${props => props.inactive ? 'hidden' : 'visible'};
  border: none;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: var(--primary);
  transition: 0.3s ease-in-out all;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  cursor: pointer;
  .left{
    transform: rotate(180deg);
  }
  :hover{
    transform: scale(1.1);
    background-color: var(--primary-hover);
  }
`

const Calendar = () => {
  const { actualWeek, appointments, changeWeek, lastWeek, nextWeek, thisWeek } = useContext(AppContext);

  // WeekAppintemns will be an Array with 7 Arrays width the data Of the day
  // If you dont have appointments you will have an Empty Array 
  const [ weekAppointments, setWeekAppointments ] = useState([]) 

  useEffect(() => {
    const actualAppointments = actualWeek.map(day => {
      const dataOfTheDay = appointments.filter(appointment => {
        return day === moment(appointment.start_time).date()
      })
      return dataOfTheDay
    })
    setWeekAppointments(actualAppointments)
  }, [ actualWeek ]);

  return (
    <CalendarContainer>
      <DaysBar dates={actualWeek}/>
      <div className="calendar-grid-container">
        <HoursBar />
        <div className="calendar-grid">
          {
            actualWeek.map((date, index) => (
              <Day appointments={weekAppointments[index] || []} key={date}/>
            ))
          }
        </div>
      </div>
      <div className="change-week__container">
        <ChangeWeek 
          inactive={ actualWeek === lastWeek ? true : false }
          className="change-week"
          onClick={() => actualWeek === nextWeek ? changeWeek(thisWeek) : changeWeek(lastWeek)}>
          <img className="left" src="/static/awesome-arrow-right-white.svg"/>
        </ChangeWeek>
        <ChangeWeek 
          inactive={ actualWeek === nextWeek ? true : false }
          className="change-week"
          onClick={() => actualWeek === lastWeek ? changeWeek(thisWeek) : changeWeek(nextWeek)}>
          <img src="/static/awesome-arrow-right-white.svg"/>
        </ChangeWeek>
      </div>
    </CalendarContainer>
  )
}

export default Calendar
