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
  {id:1,path:`/`,name:`HOME`,color:`bg-slate-300`,darkcolor:`bg-slate-600`},
  {id:2,path:`/projects/crm`,name:`crm`,color:`bg-rose-200`,darkcolor:`bg-amber-800`},  
  {id:4,path:`/projects/other`,name:`Other`,color:`bg-green-100`,darkcolor:`bg-cyan-900`}
]

export default function Navbar({setBgColor}: Props) {
  const {pathname}=useRouter()
  const dispatch =useDispatch()
  let darkThemes = useSelector<IReducer>(state=>state.darkThemes.dark)

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
         className={`${darkThemes?"text-black":"text-slate-300"} px-8 py-4 trapezoid rounded-t-xl ${darkThemes?element.color:element.darkcolor} ${activePage(element)}`} >
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

