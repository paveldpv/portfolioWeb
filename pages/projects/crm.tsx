import React, { useEffect, useState } from 'react'

import {CRM, IContent} from '../../public/content/content'
import MySlider from '../../components/MySlider'

interface Props  {
  data:IContent[]
}

export default function crm() {
  const [themes,setThemes]=useState(false)
  useEffect(()=>{
    let dark = localStorage.getItem(`darkThemes`)
    setThemes(!!dark)
  },[])

  return(<MySlider data={CRM} title={`CRM`} />)    
  
}