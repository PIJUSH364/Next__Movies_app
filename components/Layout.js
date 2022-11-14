import Head from 'next/head';
import React from 'react';
import NavBar from './NavBar';

function Layout({ children }) {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sf_movies</title>
      </Head>
      <header>
        <NavBar />
      </header>
      <main>{children}</main>
    </>
  );
}

export default Layout;
