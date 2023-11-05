import React, { useEffect } from 'react'

export default function Home() {

    useEffect(()=> {
        document.title="HOME"
    },[]);

  return (
    <div>
      Home
    </div>
  )
}
