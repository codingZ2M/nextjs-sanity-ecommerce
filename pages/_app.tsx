import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {StateContext} from '../context/AppStateContext'
import {Toaster} from 'react-hot-toast'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <StateContext>
        <Toaster/>
        <Component {...pageProps} />
      </StateContext>
  )
}

export default MyApp
