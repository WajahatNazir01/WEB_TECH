import React from 'react'
import Card from './card'

const rightcontent = (props) => {
  return (
    <div className='h-full w-2/3 flex flex-nowrap gap-10'>

       {props.users.map(function(user,index){
          return <Card key={index} user={user} cardnumber={index+1}/>
       })}
    </div>
  )
}

export default rightcontent