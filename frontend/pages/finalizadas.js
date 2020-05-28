import React from 'react';
import Layout from '../components/Layouts/Layout';
import AppointmentLayout from '../components/Layouts/AppointmentLayout';

const AppointmentsEnded = () => {
  return (
    <Layout>
      <AppointmentLayout status='Finalizada'/>
    </Layout>
  )
}

export default AppointmentsEnded;
