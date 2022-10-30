import React from 'react'
import MySlider from './../../components/MySlider'
import { OTHER } from '../../public/content/content'
type Props = {}

export default function other({}: Props) {
  return (<MySlider data={OTHER} title={`Other`}/>)     
}