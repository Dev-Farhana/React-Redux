import React from 'react'
import Subtract from './Subtract';

function Add({data}) {

  return (
    <div>Add:
        <span>  This is Component 1 with {data} </span>
        <Subtract data={data} />
    </div>
  )
}

export default Add;