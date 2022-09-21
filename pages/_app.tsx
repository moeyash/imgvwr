import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { PictureContext } from '../contexts/PictureContext'
import { useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const picturesState = useState<string[]>([]);

  return (
    <ChakraProvider>
      <PictureContext.Provider value={picturesState}>
        <Component {...pageProps} />
      </PictureContext.Provider>
    </ChakraProvider>
  )
}

export default MyApp
