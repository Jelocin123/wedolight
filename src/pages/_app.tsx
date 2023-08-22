import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import MyNav from '@/components/MyNav'
import 'bootstrap/dist/css/bootstrap.min.css';




export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
  <MyNav />
  
  <Component {...pageProps} />

  </>)

}


