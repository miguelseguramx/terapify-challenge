import React from 'react';
import Head from 'next/head';

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>Terapify</title>
      </Head> 
      <main className="main">
        {props.children}
      </main>
    </>
  );
};

export default Layout;