import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Slider from "react-slick";
import { IContent } from '../public/content/content';
import { useSelector } from 'react-redux';
import { IReducer } from '../reducer/typeReducer';

interface Props  {
  data:IContent[]
  title:string
 
}

export default function crm({data,title}: Props) {
  let dark = useSelector<IReducer>(state=>state.darkThemes.dark)
 

  var settingsSlider = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
    
  };
  return (    
      <div >       
        <div className={`border-solid ${dark?"border-teal-900":'border-teal-300'} border-2 p-6 mx-2 rounded-md my-2`}>
          <Slider {...settingsSlider} >            
            {data.map((element,index)=>{
              return(
                <div key={index}>
                  <h2 className={` font-Comfortaa text-center font-bold text-2xl pb-2 ${dark?"text-teal-900":"text-teal-50"}`}>
                    {element.title}
                  </h2>
                  <div className={`w-auto h-px ${dark?"bg-teal-900":'bg-teal-300'} my-6 rounded-lg `}></div>
                  <div className='flex justify-center justify-around gap-4'>
                    {element.image.map((image,index)=>{
                      return(<div key={index}
                      className={`w-96  border-solid ${dark?"border-teal-900":'border-teal-300'} border-2 p-2 rounded-2xl full_image`}>
                        <Image width={image.width||1577} 
                           height={image.height||927}
                           src={image.src}
                           alt={image.default}
                           className={` rounded-sm`} />
                        </div>)                     
                      
                    })}
                  </div>
                  <div className={`w-auto h-px ${dark?"bg-teal-900":'bg-teal-300'} my-2 rounded-lg `}></div>
                  <div className=' font-Comfortaa text-xl  py-10 font-bold '>
                    <ul className='' >
                    {element.content.map((text,index)=><li className={` text-left  ${dark?"text-teal-900":"text-teal-50"}`}
                     key={index} >{text}</li>)}
                      </ul>
                    </div>
                </div>
              )
            })}
          </Slider>
        </div>
      </div>
    );
    
  
}