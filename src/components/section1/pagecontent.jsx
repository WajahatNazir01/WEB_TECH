import React from 'react'
import LeftContent from "./leftcontent"
import RightContent from "./rightcontent";
const pagecontent = (props) => {
  console.log(props)
  return (
    <div className='py-10 px-10 h-[90vh] items-center flex justify-between gap-10'>

        <LeftContent/>
        <RightContent users={props.users}/>
    </div>
  )
}

export default pagecontent