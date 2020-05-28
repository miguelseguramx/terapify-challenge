import React from 'react';
import styled from 'styled-components';
import Appointment from './Appointment';

const AppointmentWeekList = styled('ul')`
  margin-bottom: 30px;

  .appointments-date{
    font-weight: var(--bold);
  }
`

const days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'] 
const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

const AppointmentList = ({appointmentsOfTheDay}) => {
  const date = new Date(appointmentsOfTheDay[0].start_time)

  return (
    <AppointmentWeekList>
      <p className="appointments-date">
        {`${days[date.getDay()]}, ${date.getDate()} de ${months[date.getMonth()]} 2020`}
      </p>
      {
        appointmentsOfTheDay.map(appointment => (
          <Appointment appointment={appointment} key={appointment.start_time}/>
        ))
      }
    </AppointmentWeekList>
  )
}

export default AppointmentList
