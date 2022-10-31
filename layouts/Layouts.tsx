import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useState } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import {IReducer} from './../reducer/typeReducer'

export default function Layout({ children }:any) {  
  
  const [bgColor,setBgColor]=useState(`bg-slate-300`)
  
  let darkThemes = useSelector<IReducer>(state=>state.darkThemes.dark)
  if(darkThemes===null){return}
  
  const title = useRouter().pathname==`/`? `HOME`:useRouter().pathname.split(`/`)[2].toUpperCase()
  
  return (
    <div className={`fixed w-full h-full overflow-hidden flex flex-col ${darkThemes?"bg-teal-900":" bg-gray-900"} `}> 

    <Head>
      <title>{title===`/`?`HOME`:title}</title>
    </Head>  

     <Navbar setBgColor={setBgColor} />  
     <main className={`${bgColor} flex-grow 1 flex-shrink-1 basis-auto ${darkThemes?"dark":``}`}>
          {children }   
     </main>
      <Footer/>
    </div>
  )
}