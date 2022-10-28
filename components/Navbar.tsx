import React from 'react'
import Link  from 'next/link'
import { useRouter } from 'next/router'

type Props = {
  setBgColor:React.Dispatch<React.SetStateAction<string>>
}
type nav = {
  id:number,
  path:string,
  name:string,
  color:string
}

export const navBar:nav[] = [
  {id:1,path:`/`,name:`HOME`,color:`bg-slate-300`},
  {id:2,path:`/projects/crm`,name:`crm`,color:`bg-rose-200`},  
  {id:4,path:`/projects/other`,name:`Other`,color:`bg-green-100`}
]


export default function Navbar({setBgColor}: Props) {
  const {pathname}=useRouter()
  const activePage:(a:nav)=>string=(a)=>{   
    if(a.path==pathname) setBgColor(a.color)
    return  a.path==pathname?`active`:``
  }
  
  return (
    <nav className='flex justify-between' > 
      <ul className='flex text-xl font-semibold relative'>
        {navBar.map(element=>{
         return <li key={element.id}
         className={` bg-slate-300 px-8 py-4 trapezoid rounded-t-xl ${element.color} ${activePage(element)}`} >
          <Link href={element.path}>
          {element.name}
          </Link>
         </li>
        })}
      </ul>
      <input type="checkbox" className='lamp cursor-pointer pr-10' />
    </nav>
  )
}

