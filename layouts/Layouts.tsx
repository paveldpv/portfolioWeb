import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useState } from "react"
import Head from "next/head"
import { useRouter } from "next/router"

export default function Layout({ children }:any) {
  const [bgColor,setBgColor]=useState(`bg-slate-300`)
  const title = useRouter().pathname  
  return (
    <div className=" fixed w-full h-full overflow-hidden flex flex-col "> 
    <Head>
      <title>{title===`/`?`HOME`:title}</title>
    </Head>      
       <Navbar setBgColor={setBgColor}/>      
      <main className={`${bgColor} flex-grow 1 flex-shrink-1 basis-auto`}>
        {children}
      </main>
       <Footer/>
    </div>
  )
}