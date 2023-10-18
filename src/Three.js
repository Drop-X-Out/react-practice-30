import React, { useState } from 'react'

export default function Three() {

    const [input,setInput] = useState('');

  return (
    <div>
      <input type='text' value={input} onChange={(e)=> setInput(e.target.value)} />
      <p>User Input: {input} </p>
    </div>
  )
}
