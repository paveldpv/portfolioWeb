import { useRouter } from 'next/router'
import Image from 'next/image'
import sun from './../public/image/sun.png'
import moon from './../public/image/moon.png'
import day from './../public/image/day.png'
import night from './../public/image/night.png'

type Props = {}
const skills:string[]=[
  `React/Router/Redux`,`HTML`,`Css/Tailwind`,`Node js/Express`,`FireBase`,`NEXT js`,`Mongo db`,`JS/TS`
]

export default function index({}: Props) {
  const router = useRouter()
  return (    
      <div className='text-2xl text-red-700 '>                
          <div className='flex gap-2 justify-around flex-wrap'>            
            <div className=' my-auto '> 
            <div className=' text-2xl font-bold border-b-2 border-solid border-red-700 text-center'>
              My skill
            </div>
              <ul>
                {skills.map((skill,index)=>{
                  return <li className=' text-xl font-bold m-2 text-center text'
                  key={index}>{skill}</li>
                })}
              </ul>
            </div>
            <div className=' flex relative flex-col'>
              <div className=' absolute  right-8  top-6'>
              <Image width={250} height={250} src={sun}  />
              </div>
              <div className=''>
              <Image width={400} height={400} src={day}/>
              </div>
            </div>
          </div>        
      </div>    
  )
}

