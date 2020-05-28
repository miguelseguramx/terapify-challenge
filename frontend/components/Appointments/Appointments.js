import React from 'react';
import styled from 'styled-components';
import Wrapper from '../Wrapper';
import AppointmentList from './AppointmentList';

const AppointmentsSection = styled('div')`
  flex-grow: 1;
  max-height: calc(100% - 165.55px);
  overflow: auto;
  padding: 0 20px;
`

const Appointments = ({ data, status }) => {
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
    <AppointmentsSection className="appointments">
      <Wrapper>
        {
          appointmentsFiltered.map(appointmentsOfTheDay => (
            <AppointmentList appointmentsOfTheDay={appointmentsOfTheDay} />
          ))
        }
      </Wrapper>
    </AppointmentsSection>
  )
}

export default Appointments
