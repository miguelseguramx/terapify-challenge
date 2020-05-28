import React from 'react';
import Layout from '../components/Layouts/Layout';
import AppointmentLayout from '../components/Layouts/AppointmentLayout';

const AppointmentsCanceled = () => {
  return (
    <Layout>
      <AppointmentLayout status='Cancelada'/>
    </Layout>
  )
}

export default AppointmentsCanceled;
