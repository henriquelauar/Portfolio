import * as React from 'react';
import Head from 'next/head'
import Header from '../components/Header/header'
import Menu from '../components/Main/main'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Henrique Lauar</title>
      </Head>
      <Header />
      <Menu />
    </>
  );
}
