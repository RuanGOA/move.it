
import { ChallengesContext, ChallengesProvider } from '../contexts/ChallengesContext';
import '../styles/global.css'

function MyApp({ Component, pageProps }) { //componente que está em todas as páginas
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  )
}

export default MyApp
