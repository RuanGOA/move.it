import '../styles/global.css'

function MyApp({ Component, pageProps }) { //componente que está em todas as páginas
  return <Component {...pageProps} />
}

export default MyApp
