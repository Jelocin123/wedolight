import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/home.module.scss'
import image from '../assets/front.png'
import MyNav from '@/components/MyNav'
import Image from 'next/image';
import MyFeed from '@/components/MyFeed'





const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      
      <main className='container-fluid'>

      <Image 
        src={image}
        alt='background'
        quality={100}
        fill
        className={styles.image}
        style={{objectFit:"cover"}}
        />

  <MyFeed/>
  
      </main>
    </>
  )
}
