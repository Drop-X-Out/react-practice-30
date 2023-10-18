import React, { useState } from 'react'

export default function Nine() {

const [backgroundColor,setBackgroundColor] = useState('yellow');

const handleClick = () => {
    const newColor = backgroundColor === 'yellow' ? 'lightblue' : 'white';
    setBackgroundColor(newColor)
}

  return (
    <div onClick={handleClick} 
    style={{
        backgroundColor,
        width:'200px',
        height:'200px',
        cursor:'pointer'
    }}>
      Click me to Change Color
    </div>
  )
}
