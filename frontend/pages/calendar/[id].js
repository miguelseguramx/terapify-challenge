import React, { useEffect, useContext } from 'react';
import Layout from '../../components/Layouts/Layout';
import Header from '../../components/Header';
import Calendar from '../../components/Calendar/Calendar';
import { useRouter } from 'next/router';
import AppContext from '../../context/appContext'

const AppointmentCalendar = () => {

  const router = useRouter()
  const { query: {id} } = router;
  const { getThreeWeeks } = useContext(AppContext);

  useEffect(() => {
    if(id){
      getThreeWeeks(id)
    }
  }, [id])

  return (
    <>
      <Layout color='white'>
        <Header title='Calendario'/>
        <Calendar/>
      </Layout>
    </>
  )
}

export default AppointmentCalendar
