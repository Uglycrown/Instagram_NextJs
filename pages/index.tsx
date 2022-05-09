import type { NextPage } from 'next'


import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Header from '../components/Header'
import Modal from '../components/Modal'

const Home: NextPage = () => {
  return (
    <div className="bg-gray-50 h-screen
     overflow-u-scroll scrollbar-hide ">
      <Head>
        <title >Instagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
       
      {/* header */}
       <Header />
         
      {/* Feed */}
         <Feed />


      {/* modal */}
      <Modal    /> 
    </div>
  )
}

export default Home
