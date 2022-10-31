import React, { useState } from 'react'
import Link  from 'next/link'
import { useRouter } from 'next/router'
import {useDispatch}from 'react-redux'
import { INav } from '../public/content/content'
import { DARK_MODE_OFF,DARK_MODE_ON } from '../reducer/actions'
import { useSelector } from 'react-redux'
import { IReducer } from '../reducer/typeReducer'


type Props = {
  setBgColor:React.Dispatch<React.SetStateAction<string>>,  
  
}
export const navBar:INav[] = [
  {id:1,path:`/`,name:`HOME`,
  color:`bg-gradient-to-t from-slate-200 to-slate-400`,
  darkcolor:`bg-gradient-to-t from-cyan-900 to-slate-700`,
  link:"bg-slate-400",
  linkDark:"bg-slate-700"
},

  {id:2,path:`/projects/crm`,name:`crm`,
  color:`bg-gradient-to-t from-purple-50 to-purple-200`,
  darkcolor:` bg-gradient-to-t from-emerald-700 to-teal-900`,
  link:"bg-purple-200",
  linkDark:"bg-emerald-900"},  

  {id:4,path:`/projects/other`,
  name:`Other`,color:`bg-gradient-to-t from-green-50 to-green-100`,
  darkcolor:` bg-gradient-to-t from-violet-900 to-cyan-900`,
  link:"bg-green-100",
  linkDark:"bg-cyan-900"}
]

export default function Navbar({setBgColor}: Props) {
  const {pathname}=useRouter()

  const dispatch =useDispatch()
  let darkThemes = useSelector<IReducer>(state=>state.darkThemes.dark)
  if(darkThemes===null){return}

  const activePage:(a:INav)=>string=(a)=>{   
    if(a.path==pathname) setBgColor(darkThemes?a.color:a.darkcolor)       
    return  a.path==pathname?`active`:``
  } 

  const setDark=(e)=>{
   !e.target.checked?dispatch(DARK_MODE_OFF()):dispatch(DARK_MODE_ON())    
  }

  
  return (
    <nav className='flex justify-between' > 
      <ul className='flex text-xl font-semibold relative'>
        {navBar.map(element=>{
         return <li key={element.id}
         className={`${darkThemes?"text-black":"text-slate-300"} px-8 py-4 trapezoid rounded-t-xl 
         ${darkThemes?element.link:element.linkDark} ${activePage(element)}`} >
          <Link href={element.path}>
          {element.name}
          </Link>
         </li>
        })}
      </ul>
      <input type="checkbox" className='lamp cursor-pointer pr-10' onChange={setDark} />
    </nav>
  )
}

