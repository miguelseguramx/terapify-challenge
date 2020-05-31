import React, { useContext } from 'react';
import styled from 'styled-components';
import Wrapper from '../Wrapper';
import AppointmentList from './AppointmentList';
import Link from 'next/link'
import AppContext from '../../context/appContext'
import Empty from '../Empty';

const AppointmentsSection = styled('div')`
  flex-grow: 1;
  max-height: calc(100% - 165.55px);
  overflow: auto;
  padding: 0 20px;
  position: relative;
  .calendar{
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    background-color: var(--primary);
    transition: 0.3s ease-in-out all;
    :hover{
      transform: scale(1.1);
      background-color: var(--primary-hover);
    }

    img{
      position: absolute;
      left: calc(50% - 10px);
      top: calc(50% - 10px);
      width: 20px;
      height: 20px;
    }
  }
`

const Appointments = ({ data, status }) => {

  const { psy } = useContext(AppContext);
  

  const appointmentsFiltered = []
  const days = []
  data.map(appointment => {
    const date =  new Date(appointment.start_time)
    const day = date.getDate()
    if (!days.includes(day)) {
      days.push(day)
    }
  })

  days.map(day => {
    const appointmentsOfToday = data.filter(appointment => {
      const date =  new Date(appointment.start_time)
      return date.getDate() === day && appointment.status === status
    })
    if(appointmentsOfToday.length !== 0){
      appointmentsFiltered.push(appointmentsOfToday)
    }
  })

  return (
    appointmentsFiltered.length > 0 ?
      <AppointmentsSection>
        <Wrapper>
          {
            appointmentsFiltered.map(appointmentsOfTheDay => (
              <AppointmentList appointmentsOfTheDay={appointmentsOfTheDay} key={appointmentsOfTheDay[0].start_time} />
            )) 
          }
          <Link href={`/calendar/${psy}`}>
            <a className="calendar">
              <img src="/static/awesome-calendar.svg" alt="Calendar"/>
            </a>
          </Link>
        </Wrapper>
      </AppointmentsSection>
    :  
    <Empty text='No hay citas para mostar' />
  )
}

export default Appointments
