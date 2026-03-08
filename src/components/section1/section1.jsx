import React from 'react'
import Navbar from  './navbar';
import PageContent from './pagecontent'

const section1 = (props) => {
  console.log(props)
  //ab is props ko hummne page content mai bbjna hai wo hum props ni blke props.users kr k bjhain gy
  return (
    <div className='h-screen w-full '>
    <Navbar/>
    <PageContent users={props.users}/>
    </div>

  )
}

export default section1