import Head from "next/head";
import tours from '@/styles/tours.module.scss';
import { useEffect, useRef } from "react";
import image from '../assets/background-tours (1).png'
import Image from "next/image";
import { useRouter } from "next/router";
import square from '../assets/square.png';
import triangle from '../assets/triangle.png'
import round from '../assets/circle.png'


const Tours = ()=> {

    


    



    return(

        <>
        <Head>
          <title>Tours</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="container">
          <div className="row mx-auto text-center pt-lg-1 ">

            <Image 
              src={image}
              alt='background'
              quality={100}
              fill
              className={tours.image}
              style={{objectFit:"cover"}}

            />

            <section className="col-4 mt-lg-5 pt-lg-5 ">

                <figcaption className="mb-4 mt-3 " id={tours.fig_cap}>square</figcaption>
                <figure>
                <a href="/" className="">
                <Image src={square} alt="squre" className="img-fluid"/>
                </a>
                </figure>

            </section>

            <section className="col-4 mt-lg-5 pt-lg-5 ">

                <figcaption className="mb-4 mt-3" id={tours.fig_cap}>triangle</figcaption>
                <figure>
                <a href="/" className="">
                <Image src={triangle} alt="triangle" className="img-fluid mt-lg-3"/>
                </a>
                </figure>

            </section>

            <section className="col-4 mt-lg-5 pt-lg-5 ">

                <figcaption className="mb-4 mt-3 " id={tours.fig_cap}>circle</figcaption>
                <figure>
                <a href="/" className="">
                <Image src={round} alt="triangle" className="img-fluid mt-lg-3"/>
                </a>
                </figure>

            </section>
          </div>
          <div className="row" id={tours.cap}>
            <section className="col-lg-12 ">
                <p>
                    to popular belief, Lorem Ipsum is not simply random text.
                    It has roots in a piece of classical Latin literature from 45 BC, 
                    making it over 2000 years old. Richard McClintock, a Latin professor 
                    at Hampden-Sydney College in Virginia.
                </p>
            </section>
          </div>
        </main>
      </>

    )
}

export default Tours;