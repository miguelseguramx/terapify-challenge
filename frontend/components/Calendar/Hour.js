import React from 'react'
import styled from 'styled-components';
import moment from 'moment'

const HourContainer = styled('div')`
  border: 1px solid var(--light-gray);
  
  .hour{
    color: var(--clearer-text);
  }

`

const AppointmentInCalendar = styled('div')`
  position: relative;
  top: ${props => `${props.top}%`};
  background-color: ${props => props.payed ? 'var(--success)' : 'var(--warning)'};
  background-color: ${props => props.status === 'Cancelada' && 'var(--danger)'};
  color: white;
  font-size: var(--font-lg);
  font-weight: var(--bold);
  height: ${props => `calc(100% + ${props.height}px)`};
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
  transition: 0.3s all ease-in;
  transform-origin: 100% 0% 0;
  
  @media(min-width: 839px){
    padding: 10px;
  }


  :hover{
    z-index: 2;
    background-color: ${props => props.payed ? 'var(--highlight)' : 'var(--yellow)'};
    background-color: ${props => props.status === 'Cancelada' && 'var(--danger-hover)'};
    transform: scale(1.3);
    flex-direction: column;
    .time{
      visibility: visible;
      font-size: var(--font-xs);
    }
    
    @media(min-width: 839px){
      flex-direction: row;
      transform: scale(1.1);
      .time{
        font-size: var(--font-md);
      }
    }
  }

  p{
    width: fit-content;
    margin-left: 10px;
  }

  .time{
    visibility: hidden;

    @media(min-width: 839px){
      visibility: visible;
    }
  }
`

const Hour = ({ hour, appointment }) => {
  const hasAppointment = Object.keys(appointment).length > 0 ? true : false
  let top = 0
  let height = 0
  if ( hasAppointment ){
    const minutes = moment(appointment.start_time).minutes()
    top = minutes * 100 / 60
    const duration = appointment.duration
    height = (duration * 49.83 / 60) - 49.83
  }
  const time = moment(appointment.start_time).format('hh:mm')
 
  return (
    <HourContainer>
      {
        hasAppointment && 
        <AppointmentInCalendar status={appointment.status} payed={appointment.payed} top={top} height={height}>
          {appointment.status === 'Cancelada' ? 
            <p>C</p> : 
            appointment.payed ? <p>$</p> : <p>N$</p>
          }
          <p className="time">{time}</p>
        </AppointmentInCalendar>
      }
    </HourContainer>
  )
}

export default Hour
