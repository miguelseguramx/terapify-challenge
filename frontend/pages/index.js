import React from 'react';
import Layout from '../components/Layouts/Layout';
import AppointmentLayout from '../components/Layouts/AppointmentLayout';

const Home = () => {
  return (
    <Layout>
      <AppointmentLayout status='Proxima'/>
    </Layout>
  )
}

export default Home;
