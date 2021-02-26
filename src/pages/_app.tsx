
import React from 'react';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { CountdownProvider } from '../contexts/CountdownContext';
import '../styles/global.css'

function MyApp({ Component, pageProps }) { //componente que está em todas as páginas
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  )
}

export default MyApp
