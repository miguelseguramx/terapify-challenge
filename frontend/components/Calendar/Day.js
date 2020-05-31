import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import moment from 'moment'
import Hour from './Hour';

const DayContainer = styled('div')`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(24, 1fr);
  border: 1px solid var(--light-gray);
`

const hours = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23
]

const Day = ({ appointments }) => {

  // hourAppointment will be an Array with 24 object width the data of the hour
  // If you dont have appointments you will have an empty object
  const [ hourAppointments, setHourAppointments ] = useState([]) 

  useEffect(() => {
    const dataPerHour = hours.map(hour => {
      const dataOfTheHour = appointments.filter(appointment => {
        return hour == moment(appointment.start_time).hour()
      })
      if (!dataOfTheHour[0]) return {}
      return dataOfTheHour[0]
    })
    setHourAppointments(dataPerHour)
  }, [appointments]);

  return (
    <DayContainer>
      {
        hours.map((hour, index) => (
          <Hour hour={hour} appointment={hourAppointments[index] || {}} key={hour}/>
        ))
      }
    </DayContainer>
  )
}

export default Day
