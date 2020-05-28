import React, { useContext } from 'react'
import Header from '../Header';
import HomeNavBar from '../HomeNavBar';
import MenuNavBar from '../MenuNavBar';
import Appointments from '../Appointments/Appointments';
import Modal from '../Modal';
import FakeLogin from '../FakeLogin';
import Empty from '../Empty';
import AppContext from '../../context/appContext'

const AppointmentLayout = ({status}) => {

  const { isLogged, appointments } = useContext(AppContext);

  return (
    <>
      {!isLogged && (
        <Modal>
          <FakeLogin />
        </Modal>
      )}
      <Header>
        <HomeNavBar status={status} />
      </Header>
      {appointments.length === 0 ? 
        <Empty text='No hay citas para mostar' /> :
        <Appointments status={status} data={appointments} />
      }
      <MenuNavBar/>
    </>
  )
}

export default AppointmentLayout