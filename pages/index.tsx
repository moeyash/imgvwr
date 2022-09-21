import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'

import { FullView } from '../components/FullView'
import { Gallery } from '../components/Gallery'
import { Navbar } from '../components/Navbar'

const Home: NextPage = () => {
  const [selectedPicture, setSelectedPicture] = useState<string | null>(null);


  return (
    <Box
      bg="purple.600"
      color="purple.200"
      p={2.5}
      h="100vh"
      w="100vw"
      overflow="hidden"
    >
      <Head>
        <title>Image Viewer</title>
        <meta name="description" content="A simple image viewer." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {
        selectedPicture ?

        <FullView picture={selectedPicture} onClose={() => setSelectedPicture(null)}/> :

        <>
          <Navbar/>
          <Gallery onExpand={(picture) => setSelectedPicture(picture)}/>
        </>
      }
    </Box
    >
  )
}

export default Home
