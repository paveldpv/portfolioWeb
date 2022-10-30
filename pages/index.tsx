import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import Image from 'next/image'
import sun from './../public/image/sun.png'
import moon from './../public/image/moon.png'
import day from './../public/image/day.png'
import night from './../public/image/night.png'
import { skills } from '../public/content/content'
import { IReducer } from '../reducer/typeReducer'

type Props = {
  
}


export default function index(props:any) {
  
  let dark=useSelector<IReducer>(state=>state.darkThemes.dark)
  
  return (    
      <div className={`'text-2xl ${dark?"text-red-700 ":"text-red-50 "}`}>                
          <div className='flex gap-2 justify-around flex-wrap pt-24'>            
            <div className=' my-auto '> 
            <div className=' text-7xl font-bold border-b-2 border-solid border-red-700 text-center font-Amatic test'>
              My skill
            </div>
              <ul>
                {skills.map((skill,index)=>{
                  return <li className=' text-4xl font-bold m-2 text-center text font-Amatic'
                  key={index}>{skill}</li>
                })}
              </ul>
            </div>
            <div className=' flex relative flex-col'>
              <div className=' absolute  right-8  top-6'>
              <Image width={250} height={250} src={dark?sun:moon}  />
              </div>
              <div className=''>
              <Image width={400} height={400} src={dark?day:night}/>
              </div>
            </div>
          </div>        
      </div>    
  )
}

