import { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/index.css'
import MainLayout from '../layouts/main';
import TransitionLayout from 'layouts/TransitionLayout';
const App = ({ Component, pageProps }: AppProps) => {
  return (
  <>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  </>
  )
}
export default App
