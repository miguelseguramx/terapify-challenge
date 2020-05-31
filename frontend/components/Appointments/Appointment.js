import React from 'react'
import styled from 'styled-components';

const AppointmentItem = styled('li')`
  margin: 15px 0px;
  background-color: white;
  border: 1px solid var(--list-item-border);
  border-radius: var(--border-radius-sm);
  box-shadow: var(--card-shadow);
  transition: all 0.3s ease-in-out;

    &:hover{
      box-shadow: var(--card-shadow-hover);
      transform: scale(1.03);
    }

  .appointment-content{
    padding: 15px;
  }
  .appointment-type{
    color: var(--gray);
    font-size: var(--font-sm);
  }
  .appointment-name{
    font-weight: var(--bold);
    margin: 3px 0;
  }
  .appointment-date{
    font-weight: var(--semi-bold);
    font-size: var(--font-sm);
  }
  .appointment-footer{
    background-color: #e4e4e4;
    display: flex;
    align-items: center;
    padding: 15px;
  }
  .appointment-status{
    flex-grow: 1;
  }
`

const Appointment = ({ appointment }) => {

  const formatTime = (i) => {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  const start = new Date(appointment.start_time);
  const end = new Date(appointment.end_time);

  const startHour = formatTime(start.getHours())
  let startMinutes = formatTime(start.getMinutes())
  const endHour = formatTime(end.getHours())
  let endMinutes =formatTime( end.getMinutes())

  return (
    <AppointmentItem>
      <div className="appointment-content">
        <p className="appointment-type">{appointment.service}</p>
        <p className="appointment-name">{appointment.psy === 1 ? 'Daniel' : 'Maria'}</p>
        <p className="appointment-date">
          {`de ${startHour}:${startMinutes} a ${endHour}:${endMinutes}`}
        </p>
      </div>
      <div className="appointment-footer">
        <div className="appointment-status">{`Cita ${appointment.status}`}</div>
        <img src="/static/awesome-arrow-right.svg" alt="Right Arrow" className="appointment-arrow" />
      </div>
    </AppointmentItem>
  )
}

export default Appointment
