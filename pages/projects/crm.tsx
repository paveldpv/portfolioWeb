import React, { useEffect, useState } from 'react'

import {CRM} from '../../public/content/content'
import MySlider from '../../components/MySlider'


export default function crm() { 

  return(<MySlider data={CRM} title={`CRM`} />)    
  
}