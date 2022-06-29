import React from 'react'
import BPart1 from './BPart1'
import BPart2 from './BPart2'
import BPart3 from './BPart3'
import './Body.css'


class Body extends React.Component{
  render(){
  return (
    <div id='body'>
        <BPart1 />
        <BPart2 />
        <BPart3 />
    </div>
  )
  }
}

export default Body